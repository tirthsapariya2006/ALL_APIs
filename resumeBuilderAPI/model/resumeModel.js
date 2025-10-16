const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    name : {type:String, required:true},
    degree : {type:String, required:true},
    expirence : {type:String, required:true},
})

module.exports = mongoose.model("resume",resumeSchema)