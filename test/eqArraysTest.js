const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [1]), false); // => should FAIL
assertEqual(eqArrays([1, 2, 3], ["1", "2", "3"]), false); // => should FAIL
assertEqual(eqArrays([], []), true); // => should PASS
assertEqual(eqArrays([true, true, false], [true, true, false]), true); // => should PASS