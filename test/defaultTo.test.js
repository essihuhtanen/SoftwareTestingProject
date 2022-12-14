import chai from "chai";
import defaultTo from "../src/defaultTo.js";
const expect = chai.expect;

describe("defaultTo", () => {
    it("The `defaultValue` is returned if `value` is `undefined", () => {
      expect(defaultTo(undefined, "")).to.equal("");
    });

    it("The `value` is returned if `value` is NOT `NaN`, `null`, or `undefined", () => {
        expect(defaultTo("My cheese is the yummiest!", "")).to.equal("My cheese is the yummiest!");
      });
  });