import chai from "chai";
import defaultTo from "../src/defaultTo.js";
const expect = chai.expect;

describe("defaultTo", () => {
    it("The `defaultValue` is returned if `value` is `NaN`, `null`, or `undefined", () => {
      expect(defaultTo(undefined, "")).to.equal("");
    });
  });