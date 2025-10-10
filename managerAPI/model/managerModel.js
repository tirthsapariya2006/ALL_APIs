const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true,
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['manager'],
    default: 'manager',
  }
})

module.exports = mongoose.model("user", managerSchema)