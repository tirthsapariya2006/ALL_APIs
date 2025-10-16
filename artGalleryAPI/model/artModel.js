const mongoose = require('mongoose');

const artSchema = new mongoose.Schema({
    artist : {type:String, required:true},
    art : {type:String, required:true},
    style : {type:String, required:true},
})

module.exports = mongoose.model('art',artSchema);