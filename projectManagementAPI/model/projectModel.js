const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    project : {type:String,required:true},
    users : {type:String,required:true},
    tasks : {type:String,required:true},
    team : {type:String,required:true},
})

module.exports = mongoose.model("projects",projectSchema);