const travelModel = require("../model/travelModel")

exports.add = async (req,res)=>{
    const place = await new travelModel(req.body);
    return res.status(200).send(place);
}
exports.find = async (req,res)=>{
    const place = await travelModelById(req.params.id);
    return res.status(200).send(place);
}
exports.update = async (req,res)=>{
    const place = await travelModelByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(place);
}
exports.delete = async (req,res)=>{
    const place = await travelModelByIdAndUpdate(req.params.id);
    return res.status(200).send("place deleted");
}