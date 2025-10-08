const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    name : {type:String,required:true},
    DOB : {type:Number,required:true},
    age : {type:Number,required:true},
    class : {type:String,required:true}
})

module.exports = mongoose.model("recod",recordSchema);