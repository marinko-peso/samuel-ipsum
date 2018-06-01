'use strict';

const { generateParagraphs, generateHeader } = require('../');

describe('generating paragraphs', () => {
  it('should be in the right format', () => {
    const paragraphs = generateParagraphs(4);
    expect(paragraphs.constructor).toBe(Array);
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
});
