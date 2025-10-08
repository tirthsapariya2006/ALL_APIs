const userModel = require('../model/userModel');

exports.add = async (req,res)=>{
    const user = await new userModel(req.body);
    return res.status(200).send(user)
}

exports.find = async (req,res)=>{
    const user = await userModel.findById(req.params.id);
    return res.status(200).send(user)
}

exports.update = async (req,res)=>{
    const user = await userModel.findById(req.params.id,req.body,{new:true});
    return res.status(200).send(user);
}

exports.delete = async (req,res)=>{
    const user = await userModel.findById(req.params.id);
    return res.status(200).send('user deleted');
}



