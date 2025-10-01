const mongoose = require("mongoose");

const registerSchema = new mongoose.Sechema({
    name : {type:String, require:true},
    Enrollment : {type:String, require:true},
    DOB : {type:String, require:true},
    age : {type:number, required : true}
});

module.exports = mongoose.model("students",registerSchema);