import chai from "chai";
import ceil from "../src/ceil.js";
const expect = chai.expect;

describe("Ceil", () => {
  it("No precision parameter, round up to 0 decimals:", () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it("Positive precision, round up to 2 decimals", () => {
    expect(ceil(5.731, 2)).to.equal(5.74);
  });

  it("Negative precision", () => {
    expect(ceil(50, -3)).to.equal(1000);
  });
});
