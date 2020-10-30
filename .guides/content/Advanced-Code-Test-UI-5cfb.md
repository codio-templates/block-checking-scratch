# Advanced Code Test UI

In order to reduce the friction as much as possible for teachers, a custom UI should be built for bock checking in Scratch.

![.guides/img/block-checking-ui](.guides/img/block-checking-ui.png)

1) There should be a Scratch option in the dropdown menu for the language
1) The instructor enters the path to the student work (uses the `.sb3` file extension)
1) Instructors click on all of the blocks they want to require (this will lead to a text file with the official block names)
1) This is where the magic happens, see the image below

![.guides/img/block-checking-tests](.guides/img/block-checking-tests.png)

The platform would need to automate the following things:
* Create the test folder `test1`
* Save the desired (step 3 from above) to the test directory
* Create the helper test script using a template
  * The command line argument (`blocks="$1"`) is generated from the UI above (list of all of the blocks the instructor clicked on)
  * The student file comes from the UI above
  * The directory will be auto-generated (`test1`, `test2`, etc.)
* Make a copy of the test script; the script is written is such a way that the the contents of the text file are what's important, the rest of the script does not need to be modified
  
<details>
  <summary><strong>Helper Script</strong></summary>
  
  ```bash
  #!/bin/bash

  textFile="$1"
  cp student_scratch_project.sb3 .guides/secure/scratch/test_directory
  cd .guides/secure/scratch/test_directory
  unzip -uoq student_scratch_project.sb3
  node test_script.js $textFile
  ```
  
</details>