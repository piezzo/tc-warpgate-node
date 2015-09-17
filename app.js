var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

var phpExpress = require('php-express')({

  // assumes php is in your PATH
  binPath: 'php'
});

// set view engine to php-express
app.set('views', './views');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'tc-warpgate', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/tc-warpgate')));

app.use('/', routes);
app.use('/users', users);

// must specify options hash even if no options provided!
var phpExpress = require('php-express')({

  // assumes php is in your PATH
  binPath: 'php'
});
// app.set('views', './views');
app.engine('php', phpExpress.engine);
app.set('view engine', 'php');

// routing all .php file to php-express
app.all(/.+\.php$/, phpExpress.router);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

var server = app.listen(3001, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('PHPExpress app listening at http://%s:%s', host, port);
});

module.exports = app;
