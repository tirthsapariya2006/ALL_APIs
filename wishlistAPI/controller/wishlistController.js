const wishlistModel = require("../model/wishlistModel");

exports.add = async (req,res)=>{
    const list = await new wishlistModel(req.body);
    return res.status(200).send(list);
}

exports.find = async (req,res)=>{
    const list = await wishlistModel.findById(req.params.id);
    return res.status(200).send(list);
}

exports.update = async (req,res)=>{
    const list = await wishlistModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(list);
}

exports.delete = async (req,res)=>{
    const list = await wishlistModel.findById(req.params.id);
    return res.status(200).send("list deleted");
}

