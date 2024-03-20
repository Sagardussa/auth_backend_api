// import Role from "../models/Role.js";
var Products = require("../models/Products");
var { createSuccess } = require("../utils/success.js");
var { createError } = require("../utils/error.js");

// const createproduct = async (req, res, next) => {
//   try {
//     const newproduct = new Products({
//       // productName: req.body.productName,
//       // color: req.body.color,
//       // category: req.body.category,
//       // description: req.body.description,
//       // price: req.body.price,
//       // profileIamge1: req.body.profileIamge1,
//     });
//     await newproduct.save();
//     return next(createSuccess(200, "product Successfully Added"));

//   } catch (error) {
//     res.status(500).send("Internal serve error");
//   }
// };

const getById = async (req, res, next) => {
  try {
    console.log(req.params.id);
    const product = await Products.findById(req.params.id);
    console.log("user", product);
    if (!product) {
      return next(createError(404, "product not found"));
    }
    return next(createSuccess(200, "single product", product));
  } catch (error) {
    return next(createError(500, "Internal serve error!"));
  }
};

const getAllProduct = async (req, res, next) => {
  try {
    const Product = await Products.find({});
    return next(createSuccess(200, "get All product Successfully", Product));
  } catch (error) {
    return next(createError(500, "Internal serve error"));
  }
};

exports.getAllProduct = getAllProduct;
exports.getById = getById;
