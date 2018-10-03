const fs = require('fs');
const stream = fs.createReadStream('data.txt');
const writeStream = fs.createWriteStream("output.txt");

stream.on("data", (data) => {
  console.log(data);
  console.log(data.toString());

  writeStream.write(data);
});

stream.on("end", () => {
  writeStream.close();
  console.log("\nWrite is complete!");
})