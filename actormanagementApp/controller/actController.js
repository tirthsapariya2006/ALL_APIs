const actModel = require("../model/actModel");

exports.add = async (req,res)=>{
    const act = await new actModel(req.body);
    return res.status(200).send(act);
}
exports.find = async (req,res)=>{
    const act = await actModel.findById(req.params.id);
    return res.status(200).send(act);
}
exports.update = async (req,res)=>{
    const act = await actModel.findByIdAnsUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(act);
}
exports.delete = async (req,res)=>{
    const act = await actModel.findByIdAnsUpdate(req.params.id);
    return res.status(200).send("actor deleted");
}