const assert = require('chai').assert;
const assertEqual   = require('../assertEqual');

describe("#assertEqual", () => {
  it("Return flalse when input and output are not same", () => {
    assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });

  it("Return false when input and output are same", () => {
    assert.isTrue(assertEqual(1,1));
  });
});