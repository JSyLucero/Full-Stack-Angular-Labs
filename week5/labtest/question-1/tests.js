const should = require('should');
const calc = require('./calculator');

describe('Calculator', () => {
  describe("when multiplying two numbers", () => {
    it('should multiply two numbers correctly 4 * 4 = 16', () => {
      calc.multiplyTwoNumbers(4, 4).should.equal(4*4);
    });

    it('should multiply two numbers correctly 2 * 5 = 10', () => {
      calc.multiplyTwoNumbers(2, 5).should.equal(2*5);
    });

    it('multiply two numbers should not equal 2 * 2 = 5', () => {
      calc.multiplyTwoNumbers(2, 2).should.not.equal(5);
    });

    it('should throw an error = "x" * "y"', () => {
      (() => { calc.multiplyTwoNumbers("x", "y") }).should.throw();
    });
  });
});


describe('Calculator', () => {
  describe("even doubler", () => {
    it("even double when even  2 = 4", () => {
      calc.evenDoubler(2).should.equal(2*2);
    });

    it("should not double when odd  3 = 9", () => {
      calc.evenDoubler(3).should.not.equal(3*3);
    });

    it("should not double when odd 9 => ", () => {
      calc.evenDoubler(9).should.equal(0);
    });
  });
});