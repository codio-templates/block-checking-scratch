#!/bin/bash

block="$1"
cp -f setupfixit2.sb3 .guides/secure/standard-command
cd .guides/secure/standard-command
unzip setupfixit2.sb3
node parseStandard.js $block