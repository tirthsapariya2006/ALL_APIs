const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({
    name : {type:String,require:true},
    address : {type:String,require:true},
    discription : {type:String,require:true},
})

module.exports = mongoose.model("places",travelSchema);