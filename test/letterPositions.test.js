const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("Return the location of \'e\' in \"hello\", which is [1]", () => {
    const actual = letterPositions("hello").e;
    const expected = [1];
    assert.deepEqual(actual, expected);
  });

  it("Return the location of \'n\' in \"lighthouse in the house\", which is [12]", () => {
    const actual = letterPositions("lighthouse in the house").n;
    const expected = [12];
    assert.deepEqual(actual, expected);
  });
});