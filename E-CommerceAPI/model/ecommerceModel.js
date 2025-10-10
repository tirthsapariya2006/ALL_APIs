const mongoose = require("mongoose");

const ecommerceSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("user",ecommerceSchema);
