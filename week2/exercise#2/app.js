var calculator = require('./calculator');
var comparer = require('./comparer');

let num1 = 2;
let num2 = 5;

comparer.AreNumbersEqual(num1, num2) ?
    calculator.Add(num1, num2)
  : calculator.Subtract(num1, num2);