// import Role from "../models/Role.js";
var Products = require("../models/Products");
var { createSuccess } = require("../utils/success.js");
var { createError } = require("../utils/error.js");

const createproduct = async (req, res, next) => {
  try {
    // if (req.body.product && req.body.product !== "") {
    const newproduct = new Products({
      // productName: req.body.productName,
      // color: req.body.color,
      // category: req.body.category,
      // description: req.body.description,
      // price: req.body.price,
      // profileIamge1: req.body.profileIamge1,

      productName: "Men",
      color: "white",
      category: "style",
      description: "description add",
      price: 500,
      productIamge1:
        "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
      productIamge2:
        "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
      productIamge3:
        "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
      productIamge4:
        "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
    });
    await newproduct.save();
    // return res.send("role created");
    return next(createSuccess(200, "product Successfully Added"));

    // }
    // else {
    //   res.status(400).send("bad request");
    // }
  } catch (error) {
    res.status(500).send("Internal serve error");
  }
};

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

const getByserach = async (req, res, next) => {
  // console.log("params",req.params.q);

  try {
    console.log(req.params.name);
    const serchquery = req.params.name;
    const results = Products.filter((product) =>
       product.color.toLowerCase().includes(serchquery.toLowerCase())
    );
    return next(createSuccess(200, "query product", results));
  } catch (error) {
    // console.log("query",req.query.q);
    // const product = await Products.findById(req.params.id);
    // console.log("user", product);
    // if (!product) {
    //   return next(createError(404, "product not found"));
    // }
    return next(createError(500, "Internal serve error!"));
  }
};

// const updateRole = async (req, res, next) => {
//   try {
//     const role = await Role.findById({ _id: req.params.id });
//     if (role) {
//       const newData = await Role.findByIdAndUpdate(
//         req.params.id,
//         { $set: req.body },
//         { new: true }
//       );
//       return res.send("role updated");
//     } else {
//       res.status(400).send("bad request");
//     }
//   } catch (error) {
//     res.status(500).send("Internal serve error");
//   }
// };

const getAllProduct = async (req, res, next) => {
  try {
    const Product = await Products.find({});
    return next(createSuccess(200, "get All product Successfully", Product));

    // return res.status(200).send(Product);
  } catch (error) {
    return next(createError(500, "Internal serve error"));

    // res.status(500).send("Internal serve error");
  }
};

// const deleteRole = async (req, res, next) => {
//   try {
//     const roleId = req.params.id;
//     const role = await Role.findById({ _id: roleId });
//     if (role) {
//       await Role.findByIdAndDelete(roleId);
//       return res.send("role Deleted");
//     } else {
//       res.status(400).send("bad request");
//     }
//   } catch (error) {
//     res.status(500).send("Internal serve error");
//   }
// };

exports.createproduct = createproduct;
exports.getAllProduct = getAllProduct;
exports.getById = getById;
exports.getByserach = getByserach;
// exports.updateRole = updateRole;
// exports.getAllRole = getAllRole;
// exports.deleteRole = deleteRole;
