'use strict';

const { ipsums, slips } = require('./quotes.json');

const random = arr => arr[getRandomInt(0, arr.length)];

function generateParagraphs(n = 1) {
  let prev = null;
  return Array.from({ length: n }, (value, index, arr) => {
    let ipsum;
    do {
      ipsum = random(ipsums)
    } while (ipsum === prev);
    prev = ipsum;
    return ipsum;
  });
}

function generateHeader() {
  return random(slips);
}

module.exports = { generateParagraphs, generateHeader };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
