const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨Assertion Passed✨: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed🛑: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

// Test Cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should FAIL
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([true, true, false], [true, true, false]), true); // => should PASS