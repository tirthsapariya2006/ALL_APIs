const mongoose = require("mongoose")

const businesSchema = new mongoose.Schema({
    name : {type:String,require:true},
    discription : {type:String,require:true},
    address : {type:String,required:true},
});

module.exports = mongoose.model("businessInfo",businesSchema);