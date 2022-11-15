import chai from "chai";
import eq from "../src/eq.js";
const expect = chai.expect;

const object1 = {
    category: {
      cheeses: {
        gruyere: { price: 5, description: "Le Gruyère" },
        cheddar: { price: 8, description: "Yummy cheddar" }
      },
      vegetables: {
        carrot: { price: 8, description: "Popsi popsi porkkanaa" },
        pineapple: { price: 8 }
      }
    }
};

const object2 = {
    category: {
      cheeses: {
        gruyere: { price: 5, description: "Le Gruyère" },
      },
    }
};

const object3 = {
    category: {
      cheeses: {
        gruyere: { price: 5, description: "Le Gruyère" },
      },
    }
};

const cheese1 = "gruyere";
const cheese2 = "gruyere";
  
describe("Eq", () => {
    it("Compares if two different objects are equivalent", () => {
      expect(eq(object1, object2)).to.deep.equal(false);
    });

    it("Compares if two equal looking objects are equivalent", () => {
        expect(eq(object2, object3)).to.equal(false);
    });

    it("Compares if two equal objects are equivalent", () => {
        expect(eq(object2, object2)).to.equal(true);
    });

    it("Compares if two equal cheeses are equivalent", () => {
        expect(eq(cheese1, cheese2)).to.equal(true);
    });
  });
