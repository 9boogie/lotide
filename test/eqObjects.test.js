const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

describe("#eqObject", () => {
  it("Return false when two objects ({ a: \"1\", b: \"2\" }, { b: \"2\", a: \"3\" }) are equal", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "3" };
    assert.deepEqual(eqObjects(ab,ba), false);
  });

  it("Return false when two objects ({ a: \"1\", b: \"2\" }, { a: \"1\", b: \"2\", c: \"3\"},) are not equal", () => {
    const ab = { a: "1", b: "2" };
    const abc = { a: "1", b: "2", c: "3" };
    assert.deepEqual(eqObjects(ab,abc), false);
  });

  it("Return true when two objects ({ c: \"1\", d: [\"2\", 3] }, { d: [\"2\",3], c: \"1\" }) are equal", () => {
    const cd = { c: "1", d: ["2", 3] };
    const dc = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(cd,dc), true);
  });

  it("Return true when two objects ({ c: \"1\", d: [\"2\", 3] }, { c: \"1\", d: [\"2\", 3, 4] }) are not equal", () => {
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    assert.deepEqual(eqObjects(cd,cd2), false);
  });
});