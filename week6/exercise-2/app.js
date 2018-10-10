var express = require('express');
var app = express();

app.listen(3000);

app.get('/greet', (req, res) => {
  res.send('hello world!');
});

app.get('/POST', (req, res) => {
  res.send('POST ROUTE');
});

app.get('/PUT', (req, res) => {
  res.send('PUT ROUTE');
});

app.get('/DELETE', (req, res) => {
  res.send('DELETE ROUTE');
});

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  next();
}

app.use(requestTime);