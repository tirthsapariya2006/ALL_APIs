const employeeDirectoryModel = require("../model/employeeDirectoryModel");

exports.add = async (req,res)=>{
    const dir = await new employeeDirectoryModel(req.body);
    return res.status(200).send(dir);
}

exports.find = async (req,res)=>{
    const dir = await employeeDirectoryModel.findById(req.params.id);
    return res.status(200).send(dir);
}

exports.update = async (req,res)=>{
    const dir = await employeeDirectoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(dir);
}

exports.delete = async (req,res)=>{
    const dir = await employeeDirectoryModel.findByIdAndUpdate(req.params.id);
    return res.status(200).send("employeeDirectory deleted");
}