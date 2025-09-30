const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
    name : {
        type : string,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    DOB : {
        type : string,
        required : true,
    },
    degree : {
        type : string,
        required : true
    }
})

module.exports = mongoose.model("resume", resumeSchema);