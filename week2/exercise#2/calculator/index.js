// export named function as module
module.exports = {
  Add: function (num1, num2) {
    let sum = num1 + num2;
    console.log (`The sum of ${num1} + ${num2} is ${sum}`);
    return sum;
  },

  Subtract: function (num1, num2) {
    let diff = num1 - num2;
    console.log (`The difference of ${num1} - ${num2} is ${diff}`);
    return diff;
  }
}