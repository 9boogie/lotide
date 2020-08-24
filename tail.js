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

module.exports = tail;