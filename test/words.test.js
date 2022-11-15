import chai from "chai";
import words from "../src/words.js";
const expect = chai.expect;

describe("Words", () => {
  const sentence = "kids only eat red apples";
  it("No pattern given", () => {
    expect(words(sentence)).to.deep.equal([
      "kids",
      "only",
      "eat",
      "red",
      "apples",
    ]);
  });

  const anotherSentence = "kids only eat red & blue apples";
  it("No pattern given, includes symbol", () => {
    expect(words(anotherSentence)).to.deep.equal([
      "kids",
      "only",
      "eat",
      "red",
      "blue",
      "apples",
    ]);
  });

  it("Test with regex", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).to.deep.equal([
      "fred",
      "barney",
      "&",
      "pebbles",
    ]);
  });

  it("Empty string", () => {
    expect(words("")).to.deep.equal([]);
  });

  it("Empty string with regex", () => {
    expect(words("", /[^, ]+/g)).to.deep.equal([]);
  });
});
