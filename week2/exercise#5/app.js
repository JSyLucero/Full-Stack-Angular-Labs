const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  switch (req.url) {
    case `/spin`:
      console.log('spinning');
      break;
    case `/play`:
      console.log('playing..')
      break;
    default:
      console.log('Please play or spin.');
      break;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});