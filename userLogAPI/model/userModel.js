const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {type:String,require:true},
    email : {type:String,require:true},
    phone : {type:Number,require:true},
    id : {type:Number,require:true},
}) 

module.exports = mongoose.model('user',userSchema);