// import mongoose from "mongoose";
var mongoose = require('mongoose');


const RoleSchema = mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// export default mongoose.model("Role",RoleSchema);
module.exports = mongoose.model("Role",RoleSchema);
