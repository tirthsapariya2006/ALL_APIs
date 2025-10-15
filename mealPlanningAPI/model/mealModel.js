const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
    mealName : {type:String,required:true},
    time : {type:String,required:true},
    recipe : {type:String,required:true},
})

module.exports = mongoose.model("meal",mealSchema);