#!/bin/bash -e -x

# all used variables must be defined in the calling code, except for EPOCH and TAG
function update_tag(){
  local TAG=$1
  local EPOCH=$2

  if grep "${repo} *${EPOCH}" $BASE_DIR/blacklist >/dev/null; then
      echo ${repo} ${EPOCH} is blacklisted.
      return 0
  fi
  
  cd $CHECKOUT_DIR
  local FIRST_GIT_STATUS=0
  local SECOND_GIT_STATUS=0
  git checkout $TAG > /dev/null 2>&1 || local FIRST_GIT_STATUS=$?
  if [[ $TAG == "master" ]]; then
      # tags are not a branch, so they cannot be merged. But they don't change, anyway.
      git merge > /dev/null 2>&1 || local SECOND_GIT_STATUS=$?
  else
      local SECOND_GIT_STATUS=0
  fi
      
  if ! [ $FIRST_GIT_STATUS == "0" ] ||  ! [ $SECOND_GIT_STATUS == "0" ]; then
      echo ERROR: Error executing git checkout of ${repo} $TAG
      return -1
  fi
  
  # check if the current revision already has documentation
  local GIT_ID=`git rev-parse HEAD`
  local LAST_BUILD=`cat $DOC_DIR/$EPOCH/git.ID 2>/dev/null || echo NONE`
  if [ $GIT_ID == $LAST_BUILD ] ; then
      echo "Documentation already build for version $TAG in revision $GIT_ID."
      return 0
  fi
  
  ###################################
  # Documentation method 1: Doxygen
  ###################################
  if [ -e cmake/Doxyfile.in -a ! -e doc/index.rst ]; then
    
    # create Doxyfile from template (without running cmake, since dependencies are not available)
    # step 1: collect information from CMakeLists.txt etc.
    PROJECT_NAME=`grep -i '^ *project([^()]*) *$' $CHECKOUT_DIR/CMakeLists.txt | sed -e 's/^.*( *//' -e 's/ *).*$//'`
    DOXYGEN_PROJECT_NUMBER=$TAG
    CMAKE_CURRENT_SOURCE_DIR=$CHECKOUT_DIR
    CMAKE_CURRENT_BINARY_DIR=$DOC_DIR/$EPOCH
    # create Doxyfile, step 2: apply variable replacement to template
    cp $CHECKOUT_DIR/cmake/Doxyfile.in $CHECKOUT_DIR/Doxyfile
    sed -i $CHECKOUT_DIR/Doxyfile -e "s!@PROJECT_NAME@!${PROJECT_NAME}!"
    sed -i $CHECKOUT_DIR/Doxyfile -e "s!@DOXYGEN_PROJECT_NUMBER@!${DOXYGEN_PROJECT_NUMBER}!"
    sed -i $CHECKOUT_DIR/Doxyfile -e "s!@CMAKE_CURRENT_SOURCE_DIR@!${CMAKE_CURRENT_SOURCE_DIR}!"
    sed -i $CHECKOUT_DIR/Doxyfile -e "s!@CMAKE_CURRENT_BINARY_DIR@!${CMAKE_CURRENT_BINARY_DIR}!"
    
    # create/clean output directory
    rm -rf $DOC_DIR/$EPOCH
    mkdir -p $DOC_DIR/$EPOCH

    # create the docu
    echo Creating docu for ${repo} $TAG.
    cd $CHECKOUT_DIR
    local EXITCODE=0
    doxygen > /dev/null || local EXITCODE=$?
    if ! [ "$EXITCODE" == "0" ] ; then
        echo ERROR: Error creating documentation for ${repo} $TAG.
        return -1
    fi

    # correct the directory structure
    cp -r $DOC_DIR/$EPOCH/doc/html/* $DOC_DIR/$EPOCH || local EXITCODE=$?
    if ! [ "$EXITCODE" == "0" ] ; then
        echo ERROR: Error copying documentation for ${repo} $TAG.
        cd $DOC_DIR
        rm -rf $EPOCH
        git reset -- $EPOCH > /dev/null 2>&1
        git checkout $EPOCH > /dev/null 2>&1
        return -1
    fi
    rm -rf $DOC_DIR/$EPOCH/doc
    
  ###################################
  # Documentation method 2: Sphinx
  ###################################
  elif [ -e doc/index.rst  ]; then
  
    # create conf.py from template
    # step 1: collect information from CMakeLists.txt etc.
    PROJECT_NAME=`grep -i '^ *project([^()]*) *$' $CHECKOUT_DIR/CMakeLists.txt | sed -e 's/^.*( *//' -e 's/ *).*$//'`
    autor=`grep -i '^ *set(author "[^()]"*) *$' $CHECKOUT_DIR/CMakeLists.txt | sed -e 's/^.*"//' -e 's/".*$//'`
    CMAKE_SOURCE_DIR=$CHECKOUT_DIR
    CMAKE_BINARY_DIRECTORY=$DOC_DIR/$EPOCH
    # create Doxyfile, step 2: apply variable replacement to template
    cp $CHECKOUT_DIR/cmake/conf.py.in $CHECKOUT_DIR/conf.py
    sed -i $CHECKOUT_DIR/conf.py -e "s!\\\${PROJECT_NAME}!${PROJECT_NAME}!"
    sed -i $CHECKOUT_DIR/conf.py -e "s!\\\${author}!${author}!"
    sed -i $CHECKOUT_DIR/conf.py -e "s!\\\${CMAKE_SOURCE_DIR}!${CMAKE_SOURCE_DIR}!"
    sed -i $CHECKOUT_DIR/conf.py -e "s!\\\${CMAKE_BINARY_DIR}!${CMAKE_SOURCE_DIR}!"

    sphinx-build -c $CHECKOUT_DIR -b html $CHECKOUT_DIR/doc $DOC_DIR/$EPOCH > /dev/null

  ###################################
  # No documentation method detected!
  ###################################
  else
    echo No cmake/Doxyfile.in and no doc/index.rst in ${repo} ${TAG}. Not creating documentation.
    rm -rf $DOC_DIR/$EPOCH
    return 0
  fi

  
  # save the git ID in the outptut directory
  echo $GIT_ID > $DOC_DIR/$EPOCH/git.ID

  # add all changes to git
  cd $DOC_DIR
  git add $EPOCH >/dev/null 2>&1
  local EXITCODE=0
  git commit -m "Created/updated docu for ${repo} $TAG (automatic commit)" >/dev/null 2>&1 || local EXITCODE=$?
  if ! [ "$EXITCODE" == "0" ] ; then
      echo ERROR: Error committing to git for ${repo} $TAG. Did you set git user name and email address?
      return -1
  fi
}

# get a list of repositories from github
wget https://api.github.com/orgs/ChimeraTK/repos -O repos.json
cat repos.json | grep '^ *"name": ' | sed -e 's/^ *"name": "//' -e 's/",$//' | grep -v 'General Public License' > repolist
rm repos.json

# loop the repos
BASE_DIR="${PWD}"
N_ERRORS=0
for repo in `cat repolist`; do
  if [ "$repo" = "chimeratk.github.io" -o "$repo" = "project-template" ]; then
    continue
  fi
  echo  
  echo "***********************************************************************************"
  echo Processing repository \'$repo\'
  echo "***********************************************************************************"

  # check out the repository if not existent
  CHECKOUT_DIR="${BASE_DIR}/checkouts/$repo"
  DOC_DIR="${BASE_DIR}/$repo"
  if [ -e "$CHECKOUT_DIR" ]; then
    cd $CHECKOUT_DIR;
    git remote update > /dev/null 2>&1
  else
    git clone https://github.com/ChimeraTK/${repo}.git $CHECKOUT_DIR > /dev/null 2>&1
    cd $CHECKOUT_DIR   
  fi

  # create build repository if it does not exist
  mkdir -p build

  # about the sed expression: get MM.mm out of MM.mm.pp
  # at least one digit: [0-9]\+
  # a group which 'something' is captured from the input: \(something\)
  # the dot itself (just . means any character): \.
  # take first captures group and place it in the result: \1
  # Finally do a unique sort
  EPOCH_VERSIONS=`git tag | sed -e "{s/\([0-9]\+\)\.\([0-9]\+\)\.[0-9]\+/\1\.\2/}" | sort -u`

  # loop all tags and the master
  master_result=0
  update_tag master master || master_result=$?
  # Even if the master failed: If there never was documentation successfully build
  # don't try any tags in this repo.
  if ! [ -e $DOC_DIR ]; then
      echo $repo never had any documentation and master did not build any. Skipping this repo.
      continue
  fi
  # If there is existing docu and the master fails report an error
  if ! [ $master_result == "0" ] ; then
      echo Setting error flag for ${repo} master.
      (( N_ERRORS++ )) #increase the error count
  fi
  
  for EPOCH in $EPOCH_VERSIONS; do
      cd $CHECKOUT_DIR
      TAG=`git tag | sort -r | grep "${EPOCH}\.[0-9]\+" --max-count=1`
      exit_code=0
      update_tag $TAG $EPOCH || exit_code=$?
      if ! [ "$exit_code" == "0" ] ; then
	  echo Setting error flag for ${repo} $TAG.
	  (( N_ERRORS++ )) #increase the error count
      fi
  done      

  ${BASE_DIR}/create_index_file.sh $DOC_DIR $repo

done

# update the index.html file
cat ${BASE_DIR}/header.inc > ${BASE_DIR}/index.html
cd ${BASE_DIR}
for repo in `cat repolist`; do
  if [ -e ${BASE_DIR}/${repo} ]; then
    echo "<a href=\"${repo}/index.html\">${repo}</a><br>" >> ${BASE_DIR}/index.html
  fi
done

echo "<h2>Talks and tutorials</h2>" >> ${BASE_DIR}/index.html
for file in Talks/*; do
  title=`basename -s .pdf ${file} | sed -e 's/_/ /g'`
  echo "<a href=\"${file}\">${title}</a><br>" >> ${BASE_DIR}/index.html
done

cat ${BASE_DIR}/footer.inc >> ${BASE_DIR}/index.html

git commit index.html -m "updated the main index.html (automatic commit)" >/dev/null 2>&1

if [[ $N_ERRORS == "0" ]]; then
    echo No failed documentations
else
    echo Number of failed documentations is $N_ERRORS
fi
exit $N_ERRORS
