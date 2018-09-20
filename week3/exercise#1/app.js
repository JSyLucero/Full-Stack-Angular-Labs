// require built-in file system module
var fs = require('fs');

// create some readable stream to read in the file
var stream = fs.createReadStream('data.txt');

// subscribe to 'data' emitter in readable stream
stream.on("data", (data) => {
  console.log(data.toString());
});