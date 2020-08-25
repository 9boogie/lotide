const flatten = function (inputArray) {
  let output = [];
  for (let arr of inputArray) {
    if (Array.isArray(arr)){
      for (let ar of arr) {
        output.push(ar);
      }
    } else {
      output.push(arr);
    }
  } return output;
};

module.exports = flatten;