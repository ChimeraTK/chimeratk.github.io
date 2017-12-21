# ChimeraTK API documentations

This repository contains the Doxygen documentation of all ChimeraTK projects,
plus a script to update it.

For the master and each epoch version (MAJOR.minor) the API documentation is
generated. It is updated if the git commit ID changes, which is the case if

* the master is changed
* a new bugfix tag in an epoch is made (for instance docu 00.18 was build
  for 00.18.01, and a tag 00.18.02 is created)

The script is scanning all repos and checks for each branch if

* CMakeLists.txt exists
* a make target 'doc' exist.

If this is the case the script
reports the update as failed if creating the documentation does not work.
The documentation is expected in the folder 'doc/html' inside the build directory.

The documention can be found on
<a href="https://chimeratk.github.io/">https://chimeratk.github.io/</a>

There is a shell variable OTHER_CMAKE_ARGUMENTS (name taken from the Jenkins option) which is passed to cmake.
Use this to define arguments like the CMAKE_MODULE_PATH if needed.

Additionally, talks and tutorials about ChimeraTK can be uploaded as PDF files into the subdirectory Talks. The file name should be the title with spaces replaced by underscores. New files will be automatically added to the list in the next documentation update.
