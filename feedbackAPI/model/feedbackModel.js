const mongoose = require("mongoose");

const feedbackSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    rating : {
        type : String
    }
});

module.export = mongoose.model("feedback",feedbackSchema)