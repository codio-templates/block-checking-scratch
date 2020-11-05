# Block Checking with an Advanced Code Test

The files used for this advanced code test can be found in `.guides/secure/advanced-example`:
* `blocksToCheck.txt` - text file with the blocks to be found in the Scratch program; use the official names for the blocks
* `helper.sh` - script that copies the student file to the test directory, unzip the student file, and call the test script
* `parseAdvanced.js` - script that checks for the presence of blocks (parses the JSON file)
* `project.json` - created during the unzip process; has all of the information about the Scratch project
* All of the other files were created as a part of the unzip process; these are not needed for auto-grading

### Text File
The text file has list of the desired blocks. These blocks need to be written with "official" name. You can look up the official name [here](https://docs.google.com/spreadsheets/d/1WUp5XHwSCwj3IppemIkhd-w_l5edsfx6cOAHhoRZDE0/edit?usp=sharing) (still a work in progress). Put one block per line.

### Helper Script
Block checking is composed of a helper script in Bash that:
* Accepts a text file as a command line argument
* Copies the student file to the test directory
* Changes the present working directory to the test directory
* Unzips the student file
* Calls the test script and passes the text file as a command line argument

### Test Script
The test script is written in Node and performs the following tasks:
* **Step 1** - Read the the associated text file and transform the string of block names into a list where each element is a block name.
* **Step 2** - Load and parse the JSON file as an object.
* **Step 3** - Create lists of all blocks for the stage, all blocks for all sprite, and a list of the stage and sprite blocks.
  * The list comprised of the sprite and the stage blocks is used by default.
* **Step 4** - Generate a list of objects that store the results of checking for the blocks
  * The object has the name of the block, if it is present in the student code, and feedback message for any missing blocks.
* **Step 5** - Print any feedback messages to the students about missing blocks.
* **Step 6** - Use a system exit to send results back to Codio about student performance. If all required blocks are present, a message is sent to the screen.

|||warning
## Outstanding Issues
* Generating the text file, testing directory, and the scripts still does not have an automated solution.
* You need to use the `-uoq` flags when unzipping the file; the tests are less reliable otherwise
* Need to find a way to detect and ignore orphan blocks
* Need to translate official block names to something that is student friendly

|||

{Check It!|assessment}(test-178347700)
