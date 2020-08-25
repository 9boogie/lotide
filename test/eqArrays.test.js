const assert = require('chai').assert;
const eqArrays   = require('../eqArrays');

describe("#eqArrays", () => {
  it("Return true when two arrays ([1,2,3], [1,2,3]) are same", () => {
    assert.deepEqual(eqArrays([1,2,3],[1,2,3]), true);
  });

  it("Return false when two arrays ([\"1\",\"2\",\"3\"], [\"1\",\"2\",3]", () => {
    assert.deepEqual(eqArrays(["1","2","3"],["1","2",3]), false);
  });

  it("Return false when two arrays ([1,2,3], [1,2,3]) have same value, but different sequence", () => {
    assert.deepEqual(eqArrays([1,2,3],[3,2,1]), false);
  });
});