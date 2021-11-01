const middle = function(arr) {
  // Handle empty, or single elem arrays
  if (arr.length < 3) return [];

  middleArray = [];

  // Even numbered array length
  if (arr.length % 2 === 0) {
    const middleIndex1 = (arr.length / 2) - 1;
    middleArray.push(arr[middleIndex1], arr[middleIndex1 + 1]);
    return middleArray;
  }

  // The middle of an odd numbered array will always be one element
  const middleIndex = Math.floor(arr.length / 2);
  middleArray.push(arr[middleIndex]);

  return middleArray; 
};

module.exports = middle;