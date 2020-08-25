const assert = require('chai').assert;
const countOnly   = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true })

describe("#countOnly", () => {
  it("Return counted number for the true items in the object", () => {
    let actual = result['Jason'];
    let expect = 1
    assert.strictEqual(actual,expect);
  });

  it("Return counted number for the true items in the object", () => {
    let actual = result['Karima'];
    let expect = undefined;
    assert.strictEqual(actual,expect);
  });

  it("Return counted number for the true items in the object", () => {
    let actual = result['Fang'];
    let expect = 2
    assert.strictEqual(actual,expect);
  });
});