var moment = require('moment');

var greet = function () {
  var date = moment().format('YYYY-M-d');
  var time = moment().format("h:mm:ss");
  console.log(`Current Date: ${date} | Current Time: ${time}`);
}

greet();