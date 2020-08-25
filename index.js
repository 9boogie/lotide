const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');

module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  countOnly,
  eqArrays,
  eqObjects,
  findKeyByValue,
  flatten
};