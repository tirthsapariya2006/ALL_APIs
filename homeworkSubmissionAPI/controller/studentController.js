const studentModel = require("../model/studentModel");

exports.add = async (req,res)=>{
    const student = await new student(req.body);
    return res.status(200).send(student)
}
exports.find = async (req,res)=>{
    const student = await student.findById(req.params.id);
    return res.status(200).send(student)
}
exports.update = async (req,res)=>{
    const student = await student.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(student)
}
exports.delete = async (req,res)=>{
    const student = await student.findByIdAndDelete(req.params.id);
    return res.status(200).send("student deleted")
}