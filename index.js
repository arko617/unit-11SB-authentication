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

app.use('/', express.static('client'));

app.post('/users', function(req, res, next) {
  var token = hat();
  req.body['access_token'] = token;
  console.log(req.body);
  User.create(req.body, function(err,data){
    if(err) return next(err);
    res.end('done');
  });
  //console.log(User);
});

app.post('/login', function(req, res) {
  console.log(req.body);
  User.findOne(req.body, function(err, data){
    if(err) return next(err);
    // res.cookie('access_token', data.access_token, {maxAge: 360000, httpOnly: true});
    app.get('/dogs', function (req, res, next) {
      // console.log(req.cookies.access_token);
      // User.findOne({'access_token': req.cookies.access_token}
      if(err) return next(err);
      
      if(data)
        res.end("WELCOME TO DOGS");  
    });

    res.end('done');

  });

});

// the dogs should not be shown unless the user is logged in
//


app.listen(3000)

