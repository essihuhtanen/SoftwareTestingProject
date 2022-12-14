import chai from "chai";
import compact from "../src/compact.js";
const expect = chai.expect;

describe("Compact", () => {
  it("Returns an array without null value - check against set of numbers (not an array)", () => {
    expect(compact([2, null, 3, 1]))
      .to.be.an("array")
      .that.includes(1, 2, 3);
  });
  /*
  it("Returns an array without 0", () => {
    expect(compact([2, 0, 3, 1])).to.equal([2, 3, 1]);
  });
*/
  it("Returns an empty array", () => {
    expect(compact([0, null, "", undefined, NaN])).to.be.an("array").that.is
      .empty;
  });
});
