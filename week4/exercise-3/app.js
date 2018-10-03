var should = require("should");
var calc = require("./calculator");

calc.AddTwoNumbers("a", "b");

describe("Calculator", () => {
  
  describe("when used synchronously", () => {

    it("should add two numbers correctly", () => {
      calc.AddTwoNumbers(2, 2).should.equal(4);
    });

    it("should add two numbers and not equal", () => {
      calc.AddTwoNumbers(2, 2).should.not.equal(0);
    });

    it("should throw an error", () => {
      (() => { calc.AddTwoNumbers(2, "a") }).should.throw();
    });

    it("should subtract two numbers correctly", () => {
      calc.SubtractTwoNumbers(2, 2).should.equal(0);
    });

    it("should subtract two numbers and not equal", () => {
      calc.SubtractTwoNumbers(2, 2).should.not.equal(4);
    });
    
    it("should throw an error", () => {
      (() => { calc.SubtractTwoNumbers(2, "a") }).should.throw();
    });
  });
});