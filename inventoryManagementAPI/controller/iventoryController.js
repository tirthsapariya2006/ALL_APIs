const iventoryModel = require("../model/iventoryModel");

exports.add = async (req,res)=>{
    const iventory = await new iventoryModel(req.body);
    return res.status(200).send(iventory);
}

exports.find = async (req,res)=>{
    const iventory = await iventoryModel.findById(req.params.id);
    return res.status(200).send(iventory);
}

exports.update = async (req,res)=>{
    const iventory = await iventoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(iventory);
}

exports.delete = async (req,res)=>{
    const iventory = await iventoryModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(iventory);
}