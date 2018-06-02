'use strict';

const quotes = require('./quotes.json');

const random = arr => arr[getRandomInt(0, arr.length)];

const Mode = {
  Regular: 'regular',
  Lite: 'lite'
};

function generateParagraphs(n = 1, mode = Mode.Regular) {
  let prev = null;
  return Array.from({ length: n }, (value, index, arr) => {
    let ipsum;
    do {
      ipsum = random(quotes[mode].ipsums);
    } while (ipsum === prev);
    prev = ipsum;
    return ipsum;
  });
}

function generateHeader(mode = Mode.Regular) {
  return random(quotes[mode].slips);
}

module.exports = { generateParagraphs, generateHeader, Mode };

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
