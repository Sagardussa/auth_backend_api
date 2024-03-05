var createError = require('http-errors');
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
var express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import roleRoute from "./routes/role.js";
var roleRoute = require('./routes/role');
var authRoute = require('./routes/auth');
var userRoute = require('./routes/user');




var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.use(bodyParser.json());
dotenv.config();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});

app.use(
  cors({
    // origin:'http://localhost:4200',
    origin: process.env.LIVE_URL,
    credentials: true,
  })
);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use("/api/role", roleRoute);
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

//respone handler middleware
app.use((obj, req, res, next) => {
  const statusCode = obj.status || 500;
  const message = obj.message || "Something went wrong!";

  return res.status(statusCode).json({
    success: [200, 201, 204].some((a) => (a === obj.status ? true : false)),
    status: statusCode,
    message: message,
    data: obj.data,
  });
});

//DB connection
const connectMongooDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("connected to database");
  } catch (error) {
    throw error;
  }
};

connectMongooDB();

module.exports = app;
