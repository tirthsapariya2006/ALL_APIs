const listModel = require("../model/listModel");

exports.add = async (req,res)=>{
    const list =await new listModel(req.body);
    return res.status(200).send(list);
}

exports.getAll = async (req,res) => {
    const list = await listModel.find();
    return res.status(200).send(list);
}

exports.find = async (req,res) => {
    const list = await listModel.findById(req.params.id);
    return res.status(200).send(list);
}

exports.update = async (req,res) => {
    const list = await listModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(list);
}

exports.delete = async (req,res) => {
    const list = await listModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("list deleted");
}
