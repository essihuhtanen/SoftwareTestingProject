import chai from "chai";
import filter from "../src/filter.js";
const expect = chai.expect;

const arr1 = [{'product' : 'cheese', 'available' : true},    
             {'product' : 'milk', 'available' : false},
             {'product' : 'yogurt', 'available' : true}];

const arr2 = [{'product' : 'cheese', 'available' : false},    
             {'product' : 'milk', 'available' : false}];

const nullarr = null;

describe("Filter", () => {
    it("Function returns an array when some values meet condition", () => {
        expect(filter(arr1, ({available}) => available )).to.be.an('array')
    });
    it("Function takes a null instead of array", () => {
        expect(filter(nullarr, ({available}) => available )).to.be.an('array')
    });
    it("No value meets the condition", () => {
        expect(filter(arr2, ({available}) => available )).to.be.an('array')
    });
  });