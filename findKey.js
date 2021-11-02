const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨Assertion Passed✨: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed🛑: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// const data1 = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };

// assertEqual(findKey(data1, x => x.stars === 1), "Blue Hill");
// assertEqual(findKey(data1, x => x.stars === 3), "Akaleri");
// assertEqual(findKey(data1, x => x.stars === 2), "noma");
// assertEqual(findKey(data1, x => x.stars !== 3), "Blue Hill");
// assertEqual(findKey(data1, x => x.stars), "Blue Hill");
// assertEqual(findKey({}, x => x.stars), undefined);