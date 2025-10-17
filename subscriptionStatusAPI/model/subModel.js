const mongoose = require('mongoose');

const subSchema = new mongoose.Schema({
    user : {type:String,required:true},
    plan : {type:String,required:true},
    subription : {type:String,required:true}
})

module.exports = mongoose.model('user', subSchema)