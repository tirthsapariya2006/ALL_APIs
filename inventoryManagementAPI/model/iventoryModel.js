const mongoose = require("mongoose");

const iventorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: String, required: true, unique: true },
  quantity: { type: Number, default: 0 },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model("iventory",iventorySchema);