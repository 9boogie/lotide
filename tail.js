let stopSign = String.fromCodePoint(128721);
let checkMark = String.fromCodePoint(0x2705);

const tail = function(array) {
  let newArray = [];
  if (array === undefined) {
    return newArray;
  } else {
    for (let i = 0; i < array.length; i++) {
      if (i === 0) {
        continue;
      } else {
        newArray.push(array[i]);
      }
    } return newArray;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`${checkMark + checkMark + checkMark} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`${stopSign + stopSign + stopSign} Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"