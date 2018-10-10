var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://jsylucero:testing123@ds129233.mlab.com:29233/comp3123-week6-lab', { useNewUrlParser: true });

var port = process.env.PORT || 3000;
app.listen(port);

var Schema = mongoose.Schema;

var userScheme = new Schema({name: String, status: String});

var User = mongoose.model('User', userScheme);

var john = User({name: 'John', status: 'active'});

john.save((err) => {
  if (err)
    throw err;

  console.log(`**** User Saved! *****`);
});

var jane = User({name: 'Jane', status: 'active'});

jane.save((err) => {
  if (err)
    throw err;

  console.log(`**** User Saved! *****`);
});