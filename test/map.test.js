import chai from "chai";
import map from "../src/map.js";
const expect = chai.expect;

describe("Map", () => {
  const array = [0, 1, 2, 3, 4];

  it("Increase values in object by one", () => {
    expect(map(array, (x) => x + 1)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it("Empty array", () => {
    expect(map([], (x) => x + 1)).to.deep.equal([]);
  });

  it("Null array", () => {
    expect(map(null, (x) => x + 1)).to.deep.equal([]);
  });
});
