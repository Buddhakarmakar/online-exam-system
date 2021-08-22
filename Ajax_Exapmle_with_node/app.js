//var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')
var indexRouter = require('./routes/test');
var admin_register=require('./routes/register_admin')
var admin_signin=require('./routes/signin-route')
var question_data=require('./routes/question_data')
var admin_logout=require('./routes/admin_logout')
var add_exam=require('./routes/add_exam')
var edit_exam=require('./routes/edit_exam')
var delete_exam=require('./routes/delete_exam')
//var usersRouter = require('./routes/');
var app=express();
// view engine setup
//app.set('views', path.join(__dirname, './admin/view'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 300000 }
}))


app.use("/public", express.static(path.join(__dirname, 'public')));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './routes')));
app.use('/', indexRouter);
app.use('/',admin_register);
app.use('/',admin_signin);

app.use('/',question_data);
app.use('/',admin_logout)
app.use('/',add_exam)
app.use('/',edit_exam)
app.use('/',delete_exam)
//app.use('/users', usersRouter);

/*/ catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
*/


/*/ error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*
 */


app.get("/api",function(req,res){
  res.json({message:"Hi Buddhadeb From sever"})
})
app.listen(3001,function(){
  console.log("Express server listening on port ",3001);
});
module.exports = app;
