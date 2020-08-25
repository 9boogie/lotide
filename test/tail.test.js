
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"


const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("Ensure we get back two elements for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });

  it("Ensure first element is \"Lighthouse\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[0], "Lighthouse");
  });

  it("Ensure last element is \"Labs\" for [\"Hello\", \"Lighthouse\", \"Labs\"]", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
  });
});