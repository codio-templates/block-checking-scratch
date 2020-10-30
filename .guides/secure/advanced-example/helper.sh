#!/bin/bash

blocks="$1"
cp advancedTest.sb3 .guides/secure/advanced-example
cd .guides/secure/advanced-example
unzip -uoq advancedTest.sb3
node parseAdvanced.js $blocks
