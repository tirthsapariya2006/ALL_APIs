const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    name : {type:String,required:true},
    lounchdate : {type:String,required:true},
    author : {type:String,required:true},
    producer : {type:String,required:true},
})

module.exports = mongoose.model("movie",movieSchema);