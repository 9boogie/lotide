const middle = function (array) {
  let outcome = [];
  let middleIndex = Math.ceil(array.length / 2);
  if (array.length > 2) {
    outcome.push(array[middleIndex - 1]);
  }
  if (array.length > 2 && array.length % 2 === 0) {
    outcome.push(array[middleIndex]);
  }
  return outcome;
};

module.exports = middle; 