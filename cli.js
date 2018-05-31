#!/usr/bin/env node
'use strict';

const chalk = require('chalk');
const { hr: printLine } = require('hr');
const path = require('path');
const argv = require('minimist')(process.argv.slice(2));

const { generateParagraphs, generateHeader } = require('./index');

const defaults = {
  type: 'paragraph',
  number: 1
};
const options = Object.assign({}, defaults, argv);
const commandName = path.basename(process.argv[1]);
const params = process.argv.slice(2).join(' ');

if (options.type === 'paragraph') {
  console.log(generateParagraphs(options.number).join('\n\n'));
  printFooter();
  process.exit();
}

console.log(generateHeader());
printFooter();

function printFooter(c = commandName, p = params) {
  if (!process.stdout.isTTY) return;
  // Only print help if its interactive terminal, not printing help with pbcopy pipe (or other) in other words.
  console.log();
  printLine('-');
  console.log(
    chalk.green.bold(`Pipe to pbcopy if you want to copy to clipboard: ${c} ${p} | pbcopy`)
  );
}
