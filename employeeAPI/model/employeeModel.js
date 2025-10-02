const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name:{type:string, require:true},
    id:{type:number, require:true},
    age:{type:number, require:true}
});

mudule.exports = mongoose.model("employ",employeeSchema);