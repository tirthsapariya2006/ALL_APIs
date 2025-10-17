const customerModel = require('../model/customerModel');

exports.add = async (req,res)=>{
    const customer = await new customerModel(req.body);
    return rea.status(200).send(customer)
}
exports.find = async (req,res)=>{
    const customer = await customerModelById(req.params.id);
    return rea.status(200).send(customer)
}
exports.update = async (req,res)=>{
    const customer = await customerModelByIdAndUpdate(req.params.id,req.body,{new:true});
    return rea.status(200).send(customer)
}
exports.delete = async (req,res)=>{
    const customer = await customerModelByIdAndDelete(req.params.id);
    return rea.status(200).send(customer)
}