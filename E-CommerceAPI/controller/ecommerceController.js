const ecommerceModel = require("../model/ecommerceModel");

exports.add = async (req,res) => {
    const user = await new ecommerceModel(req.body);
    return res.status(200).send(user)
}

exports.find = async (req,res) => {
    const user = await ecommerceModel.findById(req.params.id);
    return res.status(200).send(user);
}

exports.update = async (req,res) => {
    const user = await ecommerceModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(user);
}

exports.delete = async (req,res) => {
    const user = await ecommerceModel.findByIdAndDelete(req.params.id,req.body,{new:true});
    return res.status(200).send("user deleted");
}