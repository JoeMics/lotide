const assert = require('chai').assert;
const head = require('../head');


// Old Test Cases
// assertEqual(head([5,6,7]), 5);
// 
// assertEqual(head(["one"]), "one");
// 

describe('#head', () => {
  it('returns 1 for [1, 2, 3]', () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  })

  it('returns "5" for ["5"]', () => {
    assert.strictEqual(head(['5']), '5');
  });

  it('returns the middle element for an array of strings', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it('returns undefind when given an empty arr', () => {
    assert.strictEqual(head([]), undefined);
  });
});