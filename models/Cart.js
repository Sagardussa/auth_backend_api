// import mongoose, { Schema } from "mongoose";
var mongoose = require("mongoose");

const CartSchema = mongoose.Schema(
  {
    ProductId: {
      type: String,
      required: true,
    },
    Quantity: {
      type: Number,
      required: true,
    },
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
      required: true,
    },
    userId:{
      type:String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

// export default mongoose.model("User", UserSchema);
module.exports = mongoose.model("Cart", CartSchema);
