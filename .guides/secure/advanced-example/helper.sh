#!/bin/bash

blocks="$1"
cp -f advancedTest.sb3 .guides/secure/advanced-example
cd .guides/secure/advanced-example
unzip advancedTest.sb3
node parseAdvanced.js $blocks
