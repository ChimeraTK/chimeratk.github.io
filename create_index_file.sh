#!/bin/bash
if ! [ $# == "2" ]; then
    echo This scripts creates an index.html file in a DOC_DIR. DOC_DIR has to be an absolute path.
    echo usage: $0 DOC_DIR repo
    exit -1
fi

DOC_DIR=$1
repo=$2

if ! [ -e $DOC_DIR ]; then
    exit
fi
cd $DOC_DIR
echo "<html>" > index.html
echo "<body>" >> index.html
echo "<h1>${repo} documentation</h1>" >> index.html
echo ""  >> index.html
if [ -e $DOC_DIR/master ]; then
    echo "<h2>master</h2>" >> index.html
    echo "<a href=\"master/index.html\">master</a>" >> index.html
    echo "" >> index.html
fi
TAGS=`ls | grep -v master | grep -v "index.html" | sort -r`
if [[ $TAGS != "" ]]; then
    echo "<h2>tags</h2>" >> index.html	
    for T in $TAGS; do
	echo "<a href=\"${T}/index.html\">${T}</a><br>" >> index.html
    done
fi

echo "</body>" >> index.html
echo "</html>" >> index.html

git add index.html
git commit index.html -m "updated index file for ${repo} (automatic commit)" >/dev/null 2>&1

true
