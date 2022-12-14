import chai from "chai";
import reduce from "../src/reduce.js";
const expect = chai.expect;

describe("Reduce", () => {
  const productsInCart = {
    brie: { price: 5, description: "Brie" },
    cheddar: { price: 8, description: "Yummy cheddar" },
    carrot: { price: 8, description: "Popsi popsi porkkanaa" },
    pineapple: { price: 5 },
  };

  const sumOfPrices = (price, product) => {
    return price + product.price;
  };

  it("Correct parameters", () => {
    expect(reduce(productsInCart, sumOfPrices, 0)).to.equal(26);
  });

  const priceArray = [5, 5, 8, 10];
  it("No accumulator given", () => {
    expect(reduce(priceArray, (x, y) => x + y)).to.equal(28);
  });
});
