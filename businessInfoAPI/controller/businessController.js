const businessModel = require('../model/businesModel')

exports.add = async (req,res)=>{
    const business = await new businessModel(req.body);
    return res.status(200).send(business)
}

exports.find = async (req,res)=>{
    const business = await businessModel.findById(req.params.id);
    return res.status(200).send(business)
}
exports.update = async (req,res)=>{
    const business = await businessModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(business)
}
exports.delete = async (req,res)=>{
    const business = await businessModel.findByIdAnddelete(req.params.id,req.body,{new:true});
    return res.status(200).send('deleted succesfully')
}