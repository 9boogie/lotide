const assert = require('chai').assert;
const flatten   = require('../flatten');

describe("#flatten", () => {
  it("Return [1, 2, 3, 4, 5, 6] when [1, 2, [3, 4], 5, [6]] array is entered", () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]]);
    const expected = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(actual, expected);
  });
});