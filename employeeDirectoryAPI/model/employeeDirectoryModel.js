const mongoose = require("mongoose");

const employeeDirectorySchema = new mongoose.Schema({
    name : {type:String, require:true},
    role : {type:String, require:true},
    department : {type:String, require:true},
    hireDate : {type:String, require:true}
});

module.exports = mongoose.model("employDirectory", employeeDirectorySchema);