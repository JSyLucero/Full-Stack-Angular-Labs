var should = require("should");
var calc = require("./calculator");

calc.AddTwoNumbers("a", "b");

describe("Calculator", () => {
  
  describe("when used synchronously", () => {

    it("should add two numbers correctly", () => {
      calc.AddTwoNumbers(2, 2).should.equal(4);
    });
  
  });

  describe("when used synchronously", () => {

    it("should add two numbers correctly", () => {
      calc.AddTwoNumbers(2, 2).should.notEqual(4);
    });
  
  });

  describe("when used synchronously", () => {

    it("should subtract two numbers correctly", () => {
      calc.SubtractTwoNumbers(2, 2).should.equal(0);
    });
  
  });

  describe("when used synchronously", () => {

    it("should subtract two numbers correctly", () => {
      calc.SubtractTwoNumbers(2, 2).should.notEqual(0);
    });
  
  });

});