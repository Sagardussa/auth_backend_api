// import mongoose, { Schema } from "mongoose";
var mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    productIamge1: {
      type: String,
      required: false,
      default: "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
    },
    productIamge2: {
      type: String,
      required: false,
      default: "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
    },
    productIamge3: {
      type: String,
      required: false,
      default: "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
    },
    productIamge4: {
      type: String,
      required: false,
      default: "https://m.media-amazon.com/images/I/81JDjD4MQ1L._SX569_.jpg",
    },
  },
  {
    timestamps: true,
  }
);

// export default mongoose.model("User", UserSchema);
module.exports = mongoose.model("Products", ProductSchema);
