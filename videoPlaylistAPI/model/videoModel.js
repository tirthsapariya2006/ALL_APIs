const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
    titel : {type:String, required:true},
    user : {type:String, required:true}
})

module.exports = mongoose.model("videos",videoSchema);