var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
var bayes = require('bayes')
const fs = require('fs');
var stylus = require('stylus')
var nib = require('nib')

var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib())
}
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(
  { src: __dirname + '/public/stylesheets'
  , compile: compile
  }
))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.post('/api/', (request, response) => {
const postBody = request.body;
fs.readFile('learned.json', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
var lmo = bayes.fromJson(data)
var ident = postBody.data 
console.log(request);
var categorized = lmo.categorize(ident)
var jason = {"text": ident, "category": categorized};
response.json(jason)
})

  console.log(postBody);
});

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

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
