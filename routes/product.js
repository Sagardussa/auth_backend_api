// import express from "express";
var express = require("express");
const url = require('url')

// import Role from "../models/Role.js";
// var Role = require('../models/Role.js')
// import {
//   createRole,
//   deleteRole,
//   getAllRole,
//   updateRole,
// } from "../controllers/role.controller.js";

var {
  createproduct,
  getAllProduct,
  getById,
  getByserach,
} = require("../controllers/product.controller.js");
const { request } = require("http");
// var createRole = require('../controllers/role.controller.js');

// import { verifyAdmin } from "../utils/verifytoken.js";
// var { verifyAdmin } = require("../utils/verifyToken.js");

// const router = express.Router();
var router = express.Router();

///create new role in DB
// router.post("/create", verifyAdmin, createRole);
router.post("/create", createproduct);

//update role in DB
// router.put("/update/:id", verifyAdmin, updateRole);

//get All role in DB
router.get("/getall", getAllProduct);

//get productSerachgetById

router.get("/detail/:id", getById);

///
router.get('/search/:name',getByserach)

//delete Role
// router.delete("/deleteRole/:id", deleteRole);

// export default router;
module.exports = router;
