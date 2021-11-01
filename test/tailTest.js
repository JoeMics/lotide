const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test Case: Check the original array
console.log("Test original array:");
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Correct output
console.log("Test tail output:");
const numbers = [1, 22, 33];
const tailedNumbers = tail(numbers);
for (let i = 0; i < tailedNumbers.length; i++) {
  assertEqual(tailedNumbers[i], numbers[i + 1]);
}

// Test Case: One element yields empty array by checking length
console.log("One element yields empty array:");
assertEqual(tail([1]).length, 0);


// Test Case: Empty array should yield empty array
console.log("Empty array yields empty array");
assertEqual(tail([]).length, 0);