// import User from "../models/User.js";
// var User = require('../models/User.js');

// import { createError } from "../utils/error.js";
// import { createSuccess } from "../utils/success.js";
var { createSuccess } = require("../utils/success.js");
var { createError } = require("../utils/error.js");
const Products = require("../models/Products.js");
const Cart = require("../models/cart.js");

const addToCart = async (req, res, next) => {
  try {
    // console.log("id--> ", req.body.userId);
    const Product = await Products.find({ _id: req.body.ProductId });
    // console.log("Product", Product);

    const newCart = new Cart({
      ProductId: req.body.ProductId,
      Quantity: req.body.Quantity,
      price: Product[0].price,
      productName: Product[0].productName,
      color: Product[0].color,
      category: Product[0].category,
      description: Product[0].description,
      productIamge1: Product[0].productIamge1,
      userId: req.body.userId,
    });
    await newCart.save();
    return next(createSuccess(200, "Add product Successfully"));
  } catch (error) {
    return next(createError(500, "Internal serve error"));
  }
};
const getCart = async (req, res, next) => {
  try {
    //   const userId = req.query.userId;
    //   console.log("userId",userId);
    const userId = req.query.userId;
    // console.log("userId", userId);

    const cart = await Cart.find({ userId: userId });
    return next(createSuccess(200, "get All Cart Successfully", cart));
  } catch (error) {
    return next(createError(500, "Internal serve error"));
  }
};

const deletecart = async (req, res, next) => {
  try {
    const cartId = req.params.cartId;
    // console.log("cartId-> ", cartId);
    const cart = await Cart.findById({ _id: cartId });
    if (cart) {
      await Cart.findByIdAndDelete(cartId);
      return next(createSuccess(200, "Cart Deleted Successfully", cart));

      // return res.send("role Deleted");
    } else {
      // res.status(400).send("bad request");
      return next(createError(400, "bad request"));
    }
  } catch (error) {
    return next(createError(500, "Internal serve error"));

    // res.status(500).send("Internal serve error");
  }
};

exports.addToCart = addToCart;
exports.getCart = getCart;
exports.deletecart = deletecart;
