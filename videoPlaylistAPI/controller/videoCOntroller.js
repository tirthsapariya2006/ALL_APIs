const videoModel = require("../model/videoModel");

exports.add = async(req,res)=>{
    const video = await new videoModel(req.body);
    return res.status(200).send(video)
}
exports.find = async(req,res)=>{
    const video = await videoModel(req.params.id);
    return res.status(200).send(video)
}
exports.update = async(req,res)=>{
    const video = await videoModel(req.params.id,req.body,{new:true});
    return res.status(200).send(video)
}
exports.delete = async(req,res)=>{
    const video = await videoModel(req.params.id);
    return res.status(200).send("video deleted")
}
