const vehicalModel = require('../model/vehicalModel');

exports.add = async (req,res)=>{
    const vehical = await new vehicalModel(req.body);
    return res.status(200).send(vehical)
}
exports.find = async (req,res)=>{
    const vehical = await vehicalModel.findById(req.params.id);
    return res.status(200).send(vehical)
}
exports.update = async (req,res)=>{
    const vehical = await vehicalModel.findByIdUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(vehical)
}
exports.delete = async (req,res)=>{
    const vehical = await vehicalModel.findByIdDelete(req.params.id);
    return res.status(200).send('vehical deleted')
}