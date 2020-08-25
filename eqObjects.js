const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key1 of keys1) {
    if (Array.isArray(object1[key1])){
      return eqArrays(object1[key1], object2[key1]);
    } else if (object1[key1] !== object2[key1]) {
      return false;
    } 
  } return true;
};

module.exports = eqObjects;