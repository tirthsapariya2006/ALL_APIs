const busticketModel = require("../model/busticketModel");

exports.add = async (req,res)=>{
    const user = await new busticketModel(req.body);
    return res.status(200).send(user);
}
exports.find = async (req,res)=>{
    const user = await busticketModel.findById(req.params.id);
    return res.status(200).send(user);
}
exports.update = async (req,res)=>{
    const user = await busticketModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(user);
}
exports.delete = async (req,res)=>{
    const user = await busticketModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(user);
}