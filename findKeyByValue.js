const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✨Assertion Passed✨: ${actual} === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed🛑: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, value) {
  let foundKey;

  for (const key in obj) {
    if (obj[key] === value){
      foundKey = key;
    }
  }

  return foundKey;
}

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
  // sci_fi: "The Expanse"
  // comedy: "Brooklyn Nine-Nine"
  // drama:  "The Wire
// }
//
//
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// assertEqual(findKeyByValue({}, ''), undefined);