var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); 
const bodyParser = require('body-parser');
const lodash = require('lodash');
const helpers = require('./helpers');


var mongoose = require('mongoose');
var mongoDB ='mongodb://demario:iLmF2018_!@ds153637.mlab.com:53637/debtcal';
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var indexRouter = require('./routes/index');
var mortgageCalculatorRouter = require('./routes/mortgagecalculator');
var debtTotalsRouter = require('./routes/debtTotals');

var app = express();
app.locals.moment = require('moment');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// import variables to our template + all request
app.use((req, res, next) => {
  res.locals.h = helpers;
  next();
});


app.use('/', indexRouter);
app.use('/mortgage', mortgageCalculatorRouter);
app.use('/debtTotals/', debtTotalsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
