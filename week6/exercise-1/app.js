var express = require('express');
var app = express();

app.listen(3000);

app.get('/html', (req, res) => {
  res.send('<!DOCTYPE html><html><head></head><body><h1>Hellow World!</h1></body></html>');
});

app.get('/json', (req, res) => {
  res.json({ firstname: 'John', lastname: 'Smith'});
});

app.get('^/:route(toronto[A-Za-z]+?team)', (req, res) => {
  res.send('<!DOCTYPE html><html><head></head><body><h1>Go Toronto!</h1></body></html>');
});