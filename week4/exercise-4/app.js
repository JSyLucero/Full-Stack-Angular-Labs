const store = require('./store/index');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('No data found'));
  }
  
  else if (req.url == '/api/favoritebook') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let favoritebook = store.booksModule.favoriteBook();
    res.end(JSON.stringify(`Favorite Book: ${favoritebook.title} - Author: ${favoritebook.author}`));
  }

  else if (req.url == '/api/getbooks') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let books = store.booksModule.getBookRecommendations();
    res.end(JSON.stringify(books));
  }

  else if (req.url == '/api/getvideos') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    let videos = store.videosModule.getVideoRecommendations();
    res.end(JSON.stringify(videos));
  }

  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify('Error'));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});