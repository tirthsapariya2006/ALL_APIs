const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name : {type:String, required:true},
    erno : {type:Number, required:true},
    grade : {type:Number, required:true}
})

module.exports = mongoose.model("student",studentSchema);