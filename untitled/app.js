var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var registration_route = require('./routes/registration-route');
var login_route = require('./routes/login-route');
var logout_route=require('./routes/logout-route');
var dashboard=require('./routes/dashboard-route');
var admin_route=require('./routes/admin-route');
var add_question=require('./routes/admin-panel');
var get_ques=require('./routes/show_ques');
var check=require('./routes/check');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(path.join(__dirname, './routes')));

app.use('/', registration_route);
app.use('/', login_route);
app.use('/',dashboard);
app.use('/',logout_route);
app.use('/',admin_route);
app.use('/',add_question);
app.use('/',get_ques);
app.use('/',check);
/*
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
});*/
app.listen(3000, function(){
  console.log("Express server listening on port ",3000);
});
module.exports = app;
