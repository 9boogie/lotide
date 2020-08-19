const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
      } else {
        return false;
      } 
    } return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log("The two arrays are equal.");
  } else {
    console.log("The two arrays are not equal.")
  }
};

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

console.log(middle([1,2]));
console.log(middle([1]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));