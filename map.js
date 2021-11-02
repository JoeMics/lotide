const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Test Arrays
// const words = ["make", "me", "yell"];
// const numbers = [1, 2, 3, 4];
// const emptyArr = [];

// const results1 = map(words, word => word[0]);
// assertArraysEqual(map(words, word => word.toUpperCase()), ["MAKE", "ME", "YELL"]);
// assertArraysEqual(map(numbers, number => number * number), [1, 4, 9, 16]);
// assertArraysEqual(map(emptyArr, x => x), []);