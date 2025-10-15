const mongoose = require("mongoose");

const actSchema = new mongoose.Schema({
    actname : {type:String,required:true},
    price : {type:String,required:true},
    age : {type:String,required:true},
    gender : {type:String,required:true},
})

module.exports = mongoose.model("actors",actSchema);