//add the express module
var express = require('express');
var path = require('path');
var mongoose = require("mongoose");

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();
var SubmitForm = require('./routes/SubmitForm');
var FetchContact = require('./routes/viewContact');
var routes = require('./routes/index');

//config db
mongoose.connect("mongodb://localhost:27017/contactDB");
var db = mongoose.connection;
console.dir(db);

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/login', routes);
app.use('/submit_form',SubmitForm);
app.use('/fetchContact',FetchContact);

  var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

 console.log('Server started and is listening at :> http://:%s', port);
});
module.exports = app;
