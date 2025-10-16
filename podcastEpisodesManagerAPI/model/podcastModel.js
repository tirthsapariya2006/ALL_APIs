const mongoose = require('mongoose');

const podcastSchema = new mongoose.Schema({
    title : {type:String, required:true},
    host : {type:String, required:true},
    duration : {type:Number, required:true},
})

module.exports = mongoose.model("podcast",podcastSchema);