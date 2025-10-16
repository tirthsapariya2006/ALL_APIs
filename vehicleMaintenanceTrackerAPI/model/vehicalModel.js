const mongoose = require('mongoose');

const vehicalSchema = new mongoose.Schema({
    name : {type:String, required:true},
    type : {type:String, required:true},
    discription : {type:String},
})
module.exports = mongoose.model('vehical',vehicalSchema);