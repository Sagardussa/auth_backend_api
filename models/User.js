// import mongoose, { Schema } from "mongoose";
var mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileIamge: {
      type: String,
      required: false,
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreF2jJRuywcoTfH43fWB3QYK0oS4F3jYloA&usqp=CAU",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    roles: {
      type: [mongoose.Schema.Types.ObjectId],
      required: true,
      ref: "Role",
    },
  },
  {
    timestamps: true,
  }
);

// export default mongoose.model("User", UserSchema);
module.exports = mongoose.model("User",UserSchema);
