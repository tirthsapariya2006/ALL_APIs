const mongoose = require('mongoose');

const energySchema = new mongoose.Schema({
    plant : {type:String,required:true},
    kWh : {type:Number,required:true},
    cost : {type:Number,required:true}
})

module.exports = mongoose.model('plant',energySchema);