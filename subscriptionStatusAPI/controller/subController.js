const subModel = require('../model/subModel');

exports.add = async(req,res)=>{
    const user = await new subModel(req.body);
    return res.status(200).send(user);
}
exports.find = async(req,res)=>{
    const user = await subModel.findById(req.params.id);
    return res.status(200).send(user);
}
exports.update = async(req,res)=>{
    const user = await subModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(user);
}
exports.delete = async(req,res)=>{
    const user = await subModel.findByIdAndUpdate(req.params.id);
    return res.status(200).send('user deleted');
}