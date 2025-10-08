const mongoose = require("mongoose");

const leadBoardSchema = new mongoose.Schema({
    name : {type:String,required:true},
    score : {type:Number,required:true},
    matches : {type:Number,required:true},
    win : {type:Number,required:true},
    loss : {type:Number,required:true},
})

module.exports = mongoose.model("leadboard",leadBoardSchema);