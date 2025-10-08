const registerModel = require("../model/registerModel");

exports.addstudent = async (req,res) => {
    const student = await new registerModel(req.body);
    return res.status(200).send(student);
}

exports.getallsdents = async (req,res) => {
    const student = await registerModel.find();
    return res.status(200).send(student);
}

exports.findstudent = async (req,res)=>{
    const student = await registerModel.findById(req.params.id)
    return res.status(200).send(student)
}

exports.updatesudent = async (req,res) => {
    const student = await registerModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    return res.status(200).send(student)
}

exports.deletestudent = async (req,res) => {
    const student = await registerModel.findByIdAndDelete(req,params.id)
    return res.status(200).send("student deleted succesfully")
} 

