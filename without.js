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

const without = function(source, itemsToRemove) {
  const updatedArr = [];

  // Iterate through the source array
  for (let sourceElem of source) {
    // if this variable becomes true, the new array does not keep this element
    let isInItemsToRemove = false;

    // Iterate through the itemsToRemove array
    for (let removeElem of itemsToRemove) {
      if (sourceElem === removeElem) {
        isInItemsToRemove = true;
      }
    }

    if (!isInItemsToRemove) {
      updatedArr.push(sourceElem);
    }
  }
  return updatedArr;
};

// Test Cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1], [1]), []);
assertArraysEqual(without(['yes', 'no', 'maybe'], []), ['yes', 'no', 'maybe']);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);