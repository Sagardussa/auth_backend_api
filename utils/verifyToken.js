// import jwt from "jsonwebtoken";
var jwt = require('jsonwebtoken');

// import { createError } from "../utils/error.js";
var {createError} = require('../utils/error.js');


 const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    return next(createError(401, "you are not authenticated"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(createError(403, "Token is not valid"));
    } else {
      req.user = user;
    }
    next();
  });
};

 const verifyUser = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};

 const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "you are not authorized"));
    }
  });
};

// exports.verifyToken = verifyToken;
exports.verifyUser = verifyUser;
exports.verifyAdmin = verifyAdmin;
// exports.deleteRole = deleteRole;

