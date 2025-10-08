const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    job_name : {type:String,required:true}, 
    job_company : {type:String,required:true},
    job_salary : {type:Number,required:true}
})

module.exports = mongoose.model("job",jobSchema)