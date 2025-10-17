const eventModel = require('../model/eventModel');

exports.add = async (req,res)=>{
    const event = await new eventModel(req.body);
    return res.status(200).send(event)
}
exports.find = async (req,res)=>{
    const event = await eventModel.findById(req.body);
    return res.status(200).send(event)
}
exports.update = async (req,res)=>{
    const event = await eventModel.findByIdAndUpdate(req.body);
    return res.status(200).send(event)
}
exports.delete = async (req,res)=>{
    const event = await eventModel.findByIdAndDelete(req.body);
    return res.status(200).send(event)
}