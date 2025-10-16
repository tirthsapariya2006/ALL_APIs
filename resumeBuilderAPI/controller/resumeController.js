const resuemModel = require("../model/resumeModel");

exports.add = async (req,res)=>{
    const resume = await new resuemModel(req.body);
    return res.status(200).send(resume);
}
exports.find = async (req,res)=>{
    const resume = await resuemModel.findById(req.params.id);
    return res.status(200).send(resume);
}
exports.update = async (req,res)=>{
    const resume = await resuemModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(resume);
}
exports.delete = async (req,res)=>{
    const resume = await resuemModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("resume deleted");
}