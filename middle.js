// Test & Assertion Functions

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

// Actual Function

const middle = function(arr) {
  // Handle empty, or single elem arrays
  if (arr.length < 3) return [];

  middleArray = [];

  // Even numbered array length
  if (arr.length % 2 === 0) {
    const middleIndex1 = (arr.length / 2) - 1;
    middleArray.push(arr[middleIndex1], arr[middleIndex1 + 1]);
    return middleArray;
  }

  // The middle of an odd numbered array will always be one element
  const middleIndex = Math.floor(arr.length / 2);
  middleArray.push(arr[middleIndex]);

  return middleArray; 
};

// Test Cases
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); //  odd numbered length
assertArraysEqual(middle(["1", "2", "3", "4", "5", "6", "7"]), ["4"]); //  odd numbered length string
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //  even numbered length
assertArraysEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"]); //  even numbered length string
assertArraysEqual(middle([1, 2]), []); // two element case
assertArraysEqual(middle([1]), []); // single element case
assertArraysEqual(middle([]), []); // empty arr case