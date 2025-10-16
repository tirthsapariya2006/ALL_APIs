const energyModel = require('../model/energyModel');

exports.add = async (req,res)=>{
    const plant = await new energyModel(req.body);
    return res.status(200).send(plant)
}
exports.find = async (req,res)=>{
    const plant = await energyModel.findById(req.params.id);
    return res.status(200).send(plant)
}
exports.update = async (req,res)=>{
    const plant = await energyModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(plant)
}
exports.delete = async (req,res)=>{
    const plant = await energyModel.findByIdAndUpdate(req.params.id);
    return res.status(200).send(plant)
}