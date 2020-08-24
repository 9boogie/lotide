const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("The two arrays are equal.");
  } else {
    console.log("The two arrays are not equal.")
  }
};

module.exports = assertArraysEqual;