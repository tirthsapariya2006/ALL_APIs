const recordModel = require("../model/recordModel");

exports.add = async (req,res)=>{
    const record = await new recordModel(req.body);
    return res.status(200).send(record)
}

exports.find = async (req,res)=>{
    const record = await recordModel.findById(req.params.id);
    return res.status(200).send(record)
}

exports.update = async (req,res)=>{
    const record = await recordModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(record);
}

exports.delete = async (req,res)=>{
    const record = await recordModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(record);
}