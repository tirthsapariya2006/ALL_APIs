const noteModel = require("../model/noteModel")

exports.add = async (req,res)=>{
    const note = await new noteModel(req.body);
    return res.status(200).send(note);
}
exports.find = async (req,res)=>{
    const note = await noteModel.findById(req.params.id);
    return res.status(200).send(note);
}
exports.update = async (req,res)=>{
    const note = await noteModel.findByIdAndUpdate(req.params.id,req,body,{new:true});
    return res.status(200).send(note);
}
exports.delete = async (req,res)=>{
    const note = await noteModel.findByIdAndUpdate(req.params.id);
    return res.status(200).send("note deleted");
}