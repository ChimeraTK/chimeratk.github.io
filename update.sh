#!/bin/bash

# all used variables must be defined in the calling code, except for EPOCH and TAG
function update_tag(){
  local TAG=$1
  local EPOCH=$2

  if grep "${repo} *${EPOCH}" $BASE_DIR/blacklist >/dev/null; then
      echo ${repo} ${EPOCH} is blacklisted.
      return 0
  fi
  
  cd $CHECKOUT_DIR
  git checkout $TAG > /dev/null 2>&1
  local FIRST_GIT_STATUS=$?
  if [[ $TAG == "master" ]]; then
      #tags are not a branch, so they cannot be merged. But they don't change, anyway.
      git merge > /dev/null 2>&1
      local SECOND_GIT_STATUS=$?
  else
      local SECOND_GIT_STATUS=0
  fi
      
  if ! [ $FIRST_GIT_STATUS == "0" ] ||  ! [ $SECOND_GIT_STATUS == "0" ]; then
      echo ERROR: Error executing git checkout of ${repo} $TAG
      return -1
  fi
  
  #check if the repository is supposed to have a doxygen documentation in this version
  if ! [ -e CMakeLists.txt ]; then
      echo No CMakeLists.txt in ${repo} ${TAG}. Not creating documentation.
      return 0
  fi
  
  #check if the current revision already has documentation
  local GIT_ID=`git rev-parse HEAD`
  local LAST_BUILD=`cat $DOC_DIR/$EPOCH/git.ID 2>/dev/null || echo NONE`
  if [ $GIT_ID == $LAST_BUILD ] ; then
      echo "Documentation already build for version $TAG in revision $GIT_ID."
      return 0
  fi

  # go to the build directory 
  cd $CHECKOUT_DIR/build
  rm -rf *
  cmake .. ${OTHER_CMAKE_ARGUMENTS} > /dev/null
  if ! [ $? == "0" ] ; then
      echo ERROR: Error running cmake for ${repo} $TAG.
      return -1
  fi

  #Check if there is a doc target.
  #In cmake generated Makefiles there is a help target
  #which prints all other targets
  if ! make help | grep "^... doc$" >/dev/null; then
      echo No 'doc' target in ${repo} $TAG. Not creating documentation.
      return 0
  fi

  echo Creating docu for ${repo} $TAG.
  # create the docu
  make doc > /dev/null
  if ! [ $? == "0" ] ; then
      echo ERROR: Error creating documentation for ${repo} $TAG.
      return -1
  fi

  # copy the docu to the EPOCH directory for this repo (or master)
  mkdir -p $DOC_DIR/$EPOCH
  rm -rf $DOC_DIR/$EPOCH/* #clean old files
  cp -r doc/html/* $DOC_DIR/$EPOCH
  if ! [ $? == "0" ] ; then
      echo ERROR: Error copying documentation for ${repo} $TAG.
      cd $DOC_DIR
      rm -rf $EPOCH
      git reset -- $EPOCH > /dev/null 2>&1
      git checkout $EPOCH > /dev/null 2>&1
      return -1
  fi
  
  #save the git ID in the outptu directory
  echo $GIT_ID > $DOC_DIR/$EPOCH/git.ID

  #add all changes 
  cd $DOC_DIR
  git add $EPOCH >/dev/null 2>&1
  git commit -m "Created/updated docu for ${repo} $TAG (automatic commit)" >/dev/null 2>&1
  if ! [ $? == "0" ] ; then
      echo ERROR: Error committing to git for ${repo} $TAG. Did you set git user name and email address?
      return -1
  fi
}

#get a list of repositories from github
wget https://api.github.com/orgs/ChimeraTK/repos -O repos.json
cat repos.json | grep '^ *"name": ' | sed -e 's/^ *"name": "//' -e 's/",$//' | grep -v 'General Public License' > repolist
#echo DeviceAccess DocTest > repolist

#loop the repos
cat repolist
BASE_DIR="${PWD}"
N_ERRORS=0
for repo in `cat repolist`; do
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

  #about the sed expression: get MM.mm out of MM.mm.pp
  #at least one digit: [0-9]\+
  #a group which 'something' is captured from the input: \(something\)
  #the dot itself (just . means any character): \.
  #take first captures group and place it in the result: \1
  #Finally do a unique sort
  EPOCH_VERSIONS=`git tag | sed -e "{s/\([0-9]\+\)\.\([0-9]\+\)\.[0-9]\+/\1\.\2/}" | sort -u`

  # loop all tags and the master
  update_tag master master
  master_result=$?
  #Even if the master failed: If there never was documentation successfully build
  #don't try any tags in this repo.
  if ! [ -e $DOC_DIR ]; then
      echo $repo never had any documentation and master did not build any. Skipping this repo.
      continue
  fi
  #If there is existing docu and the master fails report an error
  if ! [ $master_result == "0" ] ; then
      echo Setting error flag for ${repo} master.
      (( N_ERRORS++ )) #increase the error count
  fi
  
  for EPOCH in $EPOCH_VERSIONS; do
      cd $CHECKOUT_DIR
      TAG=`git tag | sort -r | grep "${EPOCH}\.[0-9]\+" --max-count=1`
      update_tag $TAG $EPOCH
      if ! [ $? == "0" ] ; then
	  echo Setting error flag for ${repo} $TAG.
	  (( N_ERRORS++ )) #increase the error count
      fi
  done      

  ${BASE_DIR}/create_index_file.sh $DOC_DIR $repo

done

#update the index.html file
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
