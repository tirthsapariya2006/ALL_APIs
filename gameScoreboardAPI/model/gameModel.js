const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    player : {type:String, require:true},
    game : {type:String, require:true},
    score : {type:Number, require:true}
})

module.exports = mongoose.model("game",gameSchema);