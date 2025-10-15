const apiModel = require("../model/apiModel");

exports.add = async (req,res)=>{
    const api = await new apiModel(req.body);
    return res.status(200).send(api);
}
exports.find = async (req,res)=>{
    const api = await apiModel.findById(req.params.id);
    return res.status(200).send(api);
}
exports.update = async (req,res)=>{
    const api = await apiModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(api);
}
exports.delete = async (req,res)=>{
    const api = await apiModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("api deleted");
}