const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    student : {type:String,required:true},
    assigment : {type:String,required:true},
    submission : {type:String,required:true},
})

module.exports = mongoose.model("student",studentSchema);