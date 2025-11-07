const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : {type:String, required:true},
    rating: {type:Number, required:true},
    discription: {type:String, required:true}
})

module.exports = new mongoose.model("poducts",productSchema);