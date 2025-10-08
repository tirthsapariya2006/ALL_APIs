const mongoose = require("mongoose");

const countrySchema = mongoose.Schema({
    name : {type:String,required:true},
    capital : {type:Number,required:true},
    population : {type:Number,required:true}
})

module.exports = mongoose.model("counrty",countrySchema);