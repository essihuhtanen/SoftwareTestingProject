import chai from "chai";
import add from "../src/add.js";
//var chai = require("chai")
//var add = require ("../add.js")
const expect = chai.expect;

describe("Add", () => {
  it("adds positive number to positive number", () => {
    expect(add(3, 6)).to.equal(9);
  });
});