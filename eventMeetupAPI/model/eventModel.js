const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    host : {type:String,required:true},
    attendees : {type:String,required:true},
    metups : {type:String,required:true}
})

module.exports = mongoose.model('event',eventSchema);