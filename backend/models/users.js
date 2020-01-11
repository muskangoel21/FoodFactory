const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  mobile: { type: Number, default: 0 },
  isBlocked: { type: Boolean, default: false }
});
const UsersModel = mongoose.model("users", userSchema);
module.exports = UsersModel;
