const eqArrays = require('./eqArrays');

const assertArraysEqual = function(actual, expected) {
  const addDoubleQuotes = function(elem) {
    if (typeof elem === 'string') {
      return `"${elem}"`;
    }

    return elem;
  };

  const actualString = actual.map(addDoubleQuotes);
  const expectedString = expected.map(addDoubleQuotes);

  if (eqArrays(actual, expected)) {
    console.log(`✨Assertion Passed✨: [${actualString}] === [${expectedString}]`);
  } else {
    console.log(`🛑Assertion Failed🛑: [${actualString}] !== [${expectedString}]`);
  }
};

module.export = assertArraysEqual;

// Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEqual([1, 2, 3], [1, 2]); // Fail
assertArraysEqual([], []); //Pass
assertArraysEqual([1, 2, 3], ["1", "2", "3"]); // Fail