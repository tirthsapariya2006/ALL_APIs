const projectModel = require("../model/projectModel");

exports.add = async (req,res)=>{
    const project = await new projectModel(req.body);
    return res.status(200).send(project)
}
exports.find = async (req,res)=>{
    const project = await projectModel(req.params.id);
    return res.status(200).send(project)
}
exports.update = async (req,res)=>{
    const project = await projectModel(req.params.id,req.body,{new:true});
    return res.status(200).send(project)
}
exports.delete = async (req,res)=>{
    const project = await projectModel(req.params.id);
    return res.status(200).send("project deleted")
}