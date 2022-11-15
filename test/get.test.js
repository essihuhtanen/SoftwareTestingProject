import chai from "chai";
import get from "../src/get.js";
const expect = chai.expect;

describe("Get", () => {
  const products = {
    categories: {
      cheeses: {
        brie: { price: 5, description: "Brie" },
        cheddar: { price: 8, description: "Yummy cheddar" },
      },
      vegetables: {
        carrot: { price: 8, description: "Popsi popsi porkkanaa" },
        pineapple: { price: 8 },
      },
    },
  };

  it("Get existing value", () => {
    expect(get(products, "categories.cheeses.brie.price")).to.equal(5);
  });

  it("Default description", () => {
    const defDescr = "Default descpription";
    expect(
      get(products, "categories.vegetables.pineapple.description", defDescr)
    ).to.equal(defDescr);
  });

  it("Non-existing value without default", () => {
    expect(get(products.categories.cheeses.aurajuusto)).to.equal(undefined);
  });
});
