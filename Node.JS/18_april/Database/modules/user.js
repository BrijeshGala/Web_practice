const mongoose = require('mongoose');

// User Schema
const UserSchema = new mongoose.Schema({
  uId: {
    type: Number,
    default: 0
  },
  uName: {
    type: String,
    required: true,
    default: ""
  },
  uCity: {
    type: String
  }
});

const User = mongoose.model("User", UserSchema, "userRec");
module.exports = User;
