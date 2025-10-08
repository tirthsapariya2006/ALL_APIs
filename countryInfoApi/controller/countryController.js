const countryModel = require("../model/countryModel");

exports.add = async (req,res)=>{
    const country = await new countryModel(req.body);
    return res.status(200).send(country)
}

exports.find = async (req,res)=>{
    const country = await countryModel.findById(req.params.id);
    return res.status(200).send(country)
}

exports.update = async (req,res)=>{
    const country = await countryModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(country)
}

exports.delete = async (req,res)=>{
    const country = await countryModel.findById(req.params.id);
    return res.status(200).send("country deleted")
}