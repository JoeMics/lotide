const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('should return 1 element for an odd numbered array of strings', () => {
    assert.deepEqual(middle(["1", "2", "3", "4", "5", "6", "7"]), ["4"]); //  odd numbered length string
  });

  it('should return 1 element for an odd numbered array of nums', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); //  odd numbered length
  }); 

  it('should return 2 elements for an even numbered array of nums', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //  even numbered length
  });

  it('should return 2 elements for an even numbered array of strings', () => {
    assert.deepEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"]); //  even numbered length string
  });

  it('should return [] when there are two elements', () => {
    assert.deepEqual(middle([1, 2]), []); // two element case
  });

  it('should return [] when there is a single element', () => {
    assert.deepEqual(middle([1]), []); // single element case\
  });

  it('should return [] when passed []', () => {
    assert.deepEqual(middle([]), []); // empty arr case
  });
})




