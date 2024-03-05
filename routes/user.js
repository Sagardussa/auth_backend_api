// import express from "express";
var express = require('express');

// import { getAllUser, getById } from "../controllers/user.controller.js";
var { getAllUser, getById } = require('../controllers/user.controller.js');

// import { verifyAdmin, verifyUser } from "../utils/verifytoken.js";
var { verifyAdmin, verifyUser }  = require('../utils/verifyToken.js');


const router = express.Router();

//get all user
router.get("/", verifyAdmin, getAllUser);

//get by id
router.get("/:id", verifyUser, getById)

// export default router;
module.exports = router;
