const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('should leave the original array untouched', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it('should return an empty array when passed a single element array', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('should return the array without the first element', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('should return an empty array when passed an empty array', () => {
    assert.deepEqual(tail([]), []);
  });
});