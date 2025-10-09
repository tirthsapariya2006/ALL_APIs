const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
    name : {type:String,required:true},
    price : {type:Number,required:true},
    discription : {type:String,required:true}
})

module.exports = mongoose.model("wishlist",wishlistSchema);