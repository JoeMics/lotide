const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); // Fail
assertEqual("match", "match");              // Pass
assertEqual(1, 1);                          // Pass
assertEqual(1, 2);                          // Fail