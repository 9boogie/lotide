let stopSign = String.fromCodePoint(128721);
let checkMark = String.fromCodePoint(0x2705);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${checkMark + checkMark + checkMark} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${stopSign + stopSign + stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1,arr2)) {
    console.log("The two arrays are equal.");
  } else {
    console.log("The two arrays are not equal.")
  }
};

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

const without = function (arr1, arr2) {
  let outcome = [];
  for (let ar1 of arr1) {
    if (arr2.includes(ar1)){
      continue;
    } else {
      outcome.push(ar1);
    }
  } console.log(outcome);
};

without([1, 2, 3], [1]) 
without(["1", "2", "3"], [1, 2, "3"])

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);