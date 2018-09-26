const store = require('./store/index');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('No data found\n');
  }
  
  else if (req.url == '/api/favoritebook') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`Favorite Book: ${store.booksModule.favoriteBook()}\n`);
  }

  else if (req.url == '/api/getbooks') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(`Favorite Book: ${store.booksModule.favoriteAuthor()}\n`);
  }

  else if (req.url == '/api/getvideos') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('No data found\n');
  }

  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end('Error');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});