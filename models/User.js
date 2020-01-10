const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    isRequired: true,
    unique: true
  },
  email: {
    type: String,
    isRequired: true,
    unique: true
  },
  password: {
    type: String,
    isRequired: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
