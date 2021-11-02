const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✨Assertion Passed✨: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑Assertion Failed🛑: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

testObj1 = {
  one: 1,
  two: 2,
  three: 3,
};

testObj2 = {
  one: 1,
  two: 2,
  three: 3,
}

testObj3 = {
  one: 1,
  two: 2,
  three: 'three',
}

testObj4 = {
  one: 1,
  two: 2,
}

module.exports = assertObjectsEqual;

// assertObjectsEqual(testObj1, testObj2); // Pass
// assertObjectsEqual(testObj1, testObj3); // Fail
// assertObjectsEqual(testObj1, testObj4); // Fail