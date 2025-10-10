const mongoose = require("mongoose");

const fitnessSchema = new mongoose.Schema({
  type: String,
  duration: Number, 
  caloriesBurned: Number,
  date: Date
})

module.exports = mongoose.model("fitness", fitnessSchema);