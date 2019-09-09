'use strict';

const { generateParagraphs, generateHeader, Mode } = require('../dist/index.umd.min');
const quotes = require('../quotes.json');

describe('generating paragraphs', () => {
  it('should be in the right format', () => {
    const paragraphs = generateParagraphs(4);
    expect(paragraphs.constructor).toBe(Array);
  });

  it('should support lite mode', () => {
    const [paragraph] = generateParagraphs(1, Mode.Lite);
    expect(quotes[Mode.Lite].ipsums.includes(paragraph)).toBeTruthy();
  });

  it('should generate appropriate number', () => {
    expect(generateParagraphs(3).length).toEqual(3);
  });

  it('should not repeat 2 times in a row', done => {
    const num = 20;
    const paragraphs = generateParagraphs(num);
    paragraphs.forEach((it, index) => {
      if (index >= num - 2) return;
      expect(it !== paragraphs[index + 1]).toBeTruthy();
    });
    done();
  });
});

describe('generating header', () => {
  it('should be in the right format', () => {
    expect(generateHeader().constructor).toBe(String);
  });

  it('should support lite mode', () => {
    const header = generateHeader(Mode.Lite);
    expect(quotes[Mode.Lite].slips.includes(header)).toBeTruthy();
  });
});
