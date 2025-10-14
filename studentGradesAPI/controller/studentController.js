const studentModel = require("../model/studentModel");

exports.add = async (req,res)=>{
    const student = await new studentModel(req.body);
    return res.status(200).send(student)
}
exports.find = async (req,res)=>{
    const student = await studentModel.findById(req.params.id);
    return res.status(200).send(student)
}
exports.update = async (req,res)=>{
    const student = await studentModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(student)
}
exports.delete = async (req,res)=>{
    const student = await studentModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("student deleted")
}