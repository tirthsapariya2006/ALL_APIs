const jobModel= require("../model/jobModel")

exports.addjob = async (req,res) => {
    const job = await new jobModel(req.body); 
    return res.status(200).send(job)
}

exports.findjob = async (req,res) => {
    const job = await jobModel.find(req.params.id);
    return res.status(200).send(job)
}

exports.updatejob = async (req,res) => {
    const job = await jobModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(job)
}

exports.deletejob = async (req,res) => {
    const job = await jobModel.findByIdAndDelete(req.params.id);
    return res.status(200).send(job)
}