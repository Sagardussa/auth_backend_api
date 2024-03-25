// import express from "express";
var express = require("express");

// import Role from "../models/Role.js";
// var Role = require('../models/Role.js')
// import {
//   createRole,
//   deleteRole,
//   getAllRole,
//   updateRole,
// } from "../controllers/role.controller.js";

const {
  addToCart,
  getCart,
  deletecart,
} = require("../controllers/cart.controller.js");
// const { request } = require("http");

var router = express.Router();

router.post("/addToCart", addToCart);

//delete cart
router.delete("/deletecart/:cartId", deletecart);

router.get("/getCart", getCart);

// router.get('/getCart', (req, res) => {
//   const userId = req.query.userId;
//   console.log("userId",userId);

 
// });

// export default router;
module.exports = router;
