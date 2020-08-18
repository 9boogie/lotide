const stopSign = String.fromCodePoint(128721);
const checkMark = String.fromCodePoint(0x2705);

const head = function(array) {
  if (array === undefined) {
    return undefined;
  } else {
    return array[0];
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${checkMark + checkMark + checkMark} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${stopSign + stopSign + stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
