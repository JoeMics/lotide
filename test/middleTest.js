const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); //  odd numbered length
assertArraysEqual(middle(["1", "2", "3", "4", "5", "6", "7"]), ["4"]); //  odd numbered length string
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //  even numbered length
assertArraysEqual(middle(["1", "2", "3", "4", "5", "6"]), ["3", "4"]); //  even numbered length string
assertArraysEqual(middle([1, 2]), []); // two element case
assertArraysEqual(middle([1]), []); // single element case
assertArraysEqual(middle([]), []); // empty arr case