import chai from "chai";
import ceil from "../src/ceil.js";
//var chai = require("chai")
//var ceil = require ("../ceil.js")
const expect = chai.expect;

describe("Ceil", () => {
  it("Rounds a number to precision 1", () => {
    expect(ceil(3.0234, 1)).to.equal(3.1);
  });
});