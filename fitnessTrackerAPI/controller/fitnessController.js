const fitnessModel = require("../model/fitnessModel");

exports.add = async (req,res) => {
    const list = await new fitnessModel(req.body);
    return res.status(200).send(list);
}

exports.find = async (req,res) => {
    const list = await fitnessModel.findById(req.params.id);
    return res.status(200).send(list);
}

exports.update = async (req,res) => {
    const list = await fitnessModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(list);
}

exports.delete = async (req,res) => {
    const list = await fitnessModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("list deleted");
}