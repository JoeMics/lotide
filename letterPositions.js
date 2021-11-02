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

const letterPositions = function(sentence) {
  const results = {};

  //go through the sentence
  for (let i = 0; i < sentence.length; i++) {
    //if char is a space, "continue"
    if (sentence[i] === ' ') continue;

    //check to see if char exists in results
    if (results[sentence[i]]) {
      //if in results, .push the index into the char.array
      results[sentence[i]].push(i);
    } else {
      //else initialize the key, with an array and push the index into array
      results[sentence[i]] = [i];
    }
  }

  return results;
};

module.exports = letterPositions;


// console.log(letterPositions('lighthouse in the house'));
// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }

// const str = 'hello ';
// assertArraysEqual(letterPositions(str)["h"], [0]);
// assertArraysEqual(letterPositions(str)["e"], [1]);
// assertArraysEqual(letterPositions(str)["l"], [2, 3]);
// assertArraysEqual(letterPositions(str)["o"], [4]);