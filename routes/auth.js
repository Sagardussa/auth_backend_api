// import { register } from '../controllers/auth.controller';

// import express from "express";
var express = require("express");

var { register, login, registerAdmin, sendEmail, resetPassword } = require("../controllers/auth.controller");

// import {
//   login,
//   register,
//   registerAdmin,
//   resetPassword,
//   sendEmail,
// } from "../controllers/auth.controller.js";
// var express = require('express');

const router = express.Router();

//register
router.post("/register", register);

//Login
router.post("/login", login);

//register as admin
router.post("/register-admin", registerAdmin);

//email send reset
router.post("/send-email", sendEmail);

//reset-password
router.post("/reset-password", resetPassword);

// export default router;
module.exports = router;
