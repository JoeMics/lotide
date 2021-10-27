const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨Assertion Passed✨: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed🛑: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const letterCount = {};

  for (const char of string) {
    if (char !== ' ') {
      letterCount[char] ? letterCount[char]++ : letterCount[char] = 1;
    }
  }

  return letterCount;
};

const result = countLetters("lighthouse in the house");

assertEqual(result['l'], 1);
assertEqual(result['i'], 2);
assertEqual(result['g'], 1);
assertEqual(result['h'], 4);
assertEqual(result['t'], 2);
assertEqual(result['o'], 2);
assertEqual(result['n'], 1);
