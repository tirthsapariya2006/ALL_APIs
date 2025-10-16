const podcastModel = require('../model/podcastModel')

exports.add = async (req,res)=>{
    const podcast = await new podcastModel(req.body);
    return res.status(200).send(podcast)
}
exports.find = async (req,res)=>{
    const podcast = await podcastModel.findById(req.params.id);
    return res.status(200).send(podcast)
}
exports.update = async (req,res)=>{
    const podcast = await podcastModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(podcast)
}
exports.delete = async (req,res)=>{
    const podcast = await podcastModel.findByIdAndDelete(req.params.id);
    return res.status(200).send('podcast deleted')
}