var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Schema = mongoose.Schema;
var hat = require('hat');

mongoose.connect('mongodb://stustan:stustan@ds063809.mongolab.com:63809/student-auth-app', function(err) {
    if(err){ return err; }
    console.log('connected');
});

var UserSchema = new Schema({
  username: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true},
  access_token: String
});
var DogSchema = new Schema({
  name: String,
  age: Number
});
var User = mongoose.model('User', UserSchema);
var Dog = mongoose.model('Dog', UserSchema);

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/', express.static('public'));

app.post('/users', function(req, res, next) {

});
app.post('/login', function(req, res) {


});

// the dogs should not be shown unless the user is logged in
//
app.get('/dogs', function (req, res, next) {
});

app.listen(3000)

