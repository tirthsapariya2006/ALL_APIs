const mongoose = require("mongoose");

const taskSchema =new mongoose.Schema({
    name: {type:String,require:true},
    discription:{type:string},
    ststus:{type:string,required:true}
},{timestamps:true});

module.exports = mongoose.model("task",taskSchema);
