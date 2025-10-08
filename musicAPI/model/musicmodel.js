const mongoose = requre("mongoose");

const musicSchema = new mongoose.Schema({
    name : {type:String, required:true},
});

module.exports = mongoose.model("music",musicSchema);