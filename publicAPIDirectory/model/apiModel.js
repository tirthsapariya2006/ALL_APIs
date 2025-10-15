const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
    APIname : {type:String, require:true},
    category : {type:String, require:true},
    rating : {type:Number, require:true},
})

module.exports = mongoose.model("api",apiSchema);