const events = require('events');
const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

var eventEmitter = new events.EventEmitter();

eventEmitter.on('max', () => {
  console.log("Jackpot!!");
});

var amountPlayed = null;

const server = http.createServer((req, res) => {
  let query = url.parse(req.url, true).query;
  let message = null;

  if (req.url.includes(`/spin`)) {
    message = `spinning..`;
    !isNaN(amountPlayed) && amountPlayed !== null ?
      message += `\namount lost: ${amountPlayed}`: null;
    setTimeout(() => {
      eventEmitter.emit(amountPlayed);
      amountPlayed = null;
    }, 50);
  }
  
  else if (req.url.includes(`/play`)) {
    if (Object.keys(query).length > 0) {
      amountPlayed = query.amount;
      message = `playing..amount: ${amountPlayed}`;
    } else {
      message = `playing..`;
    }
  }

  else if (req.url == '/') {
    message = 'Please play or spin.';
  }

  message !== null ? 
    console.log(message) : null;
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});