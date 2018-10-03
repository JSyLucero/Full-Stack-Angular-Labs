const fs = require('fs');
const zlib = require('zlib');
const stream = fs.createReadStream("output.txt");

stream.pipe(fs.createWriteStream("./output.txt.gz"));