const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  title: String,
  address: String,
  price: Number,
  type: { type: String, enum: ["rent", "sale"] },
  bedrooms: Number,
  bathrooms: Number,
  description: String,
});

module.exports = mongoose.model("list", listSchema);