#!/usr/bin/env node
'use strict';

const { basename } = require('path');
const { generateParagraphs, generateHeader } = require('./');
const { hr } = require('hr');
const chalk = require('chalk');
const meow = require('meow');

const parse = argv => [basename(argv[1]), ...argv.slice(2)];

const help = `
Usage
  $  samuel-ipsum <options>

Options
  --type, -t    Chose between "paragraph" and "header"
  --number, -n  Number of paragraphs to output (default=1)

Examples
  $ samuel-ipsum --type=paragraph -n 2
  $ samuel-ipsum --type=header`;

const flags = {
  help: { alias: 'h' },
  version: { alias: 'v' },
  number: {
    type: 'number',
    alias: 'n',
    default: 1
  },
  type: {
    type: 'string',
    alias: 't',
    default: 'paragraph'
  }
};

const { flags: options } = meow(help, { flags });

if (options.type === 'paragraph') {
  console.log(generateParagraphs(options.number).join('\n\n'));
  printFooter();
  process.exit();
}

console.log(generateHeader());
printFooter();

function printFooter(argv = parse(process.argv)) {
  if (!process.stdout.isTTY) return;
  // Only print help if its interactive terminal, not printing help with pbcopy pipe (or other) in other words.
  console.log();
  hr('-');
  console.log(chalk.green.bold(
    `Pipe to pbcopy if you want to copy to clipboard: ${argv.join(' ')} | pbcopy`
  ));
}
