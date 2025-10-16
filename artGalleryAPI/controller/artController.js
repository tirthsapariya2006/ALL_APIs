const artModel = require('../model/artModel');

exports.add = async (req,res)=>{
    const art = await new artModel(req.body);
    return res.status(200).send(art);
} 
exports.find = async (req,res)=>{
    const art = await artModel.findById(req.params.Id);
    return res.status(200).send(art);
} 
exports.update = async (req,res)=>{
    const art = await artModel.findByIdAndUpdate(req.params.Id,req.body,{new:true});
    return res.status(200).send(art);
} 
exports.delete = async (req,res)=>{
    const art = await artModel.findByIdAndDelete(req.params.Id);
    return res.status(200).send('art deleted');
} 