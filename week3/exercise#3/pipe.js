var request = require('request');
var fs = require('fs');

request('http://www.google.com', (error, res, body) => {
  console.log('body:', body);
}).pipe(fs.createWriteStream('./output.html'));