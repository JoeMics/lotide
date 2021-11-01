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

const flatten = function(arr) {
  if (!arr) return;

  //this block flattens a single layer of inner array
  let newArr = [];
  for (const elem of arr) {
    if (Array.isArray(elem)) {
      elem.forEach(innerElem => {
        newArr.push(innerElem);
      });
    } else {
      newArr.push(elem);
    }
  }

  //recursive case: there is still an array in the new Array
  for (const elem of newArr) {
    if (Array.isArray(elem)) {
      return flatten(newArr);
    }
  }

  //base case: there are no more arrays in the new Array
  return newArr;
};


assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, [7 , 8]]]), [1, 2, 3, 4, 5, 6, 7, 8]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6, [7 , 8, [9, 10]]]]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(flatten(['1', '2', ['3', '4'], '5', ['6', ['7' , '8']]]), ['1', '2', '3', '4', '5', '6', '7', '8']);
assertArraysEqual(flatten([]), []);