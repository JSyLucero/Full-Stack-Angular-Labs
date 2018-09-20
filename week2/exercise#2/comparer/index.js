module.exports = {
  AreNumbersEqual: function (num1, num2) {
    let equal = num1 == num2;
    console.log(`Are ${num1} and ${num2} equal? ${equal}`);
    return equal;
  }
}