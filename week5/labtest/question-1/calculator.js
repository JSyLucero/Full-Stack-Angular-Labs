module.exports = {
  multiplyTwoNumbers: (x, y) => {
    let xNaN = isNaN(x); let yNaN = isNaN(y);
    if (xNaN)
      throw new Error("Variable x is not an integer!");
    if (yNaN)
      throw new Error("Variable y is not an integer!")
    if (xNaN && yNaN)
      throw new Error("Variable x and y are not integers!");
    
    if (!xNaN && !yNaN) {
      let product = x*y;
      console.log(`multiply ${x} * ${y} equals: ${product}`);
      return product;
    }
  },
  evenDoubler: (x) => {
    if (x % 2 == 0) {
      let product = x*x;
      console.log(`even doubler ${x} equals: ${product}`);
      return product;
    }
    else if (isNaN(x))
      throw new Error("Variable x is not an integer!");
    else {
      console.log(`even doubler ${x} equals: 0`);
      return 0;
    }
  }
}