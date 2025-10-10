const managerModel = require("../model/managerModel");

exports.add = async (req,res) =>{
    const user = await new managerModel(req.body)
    return res.satus(200).send(user)
}

exports.find = async (req,res) =>{
    const user = await managerModel.findById(req.params.id)
    return res.satus(200).send(user)
}

exports.update = async (req,res) =>{
    const user = await managerModel.findByIdAndUpdae(req.params.id,req.body,{new:true})
    return res.satus(200).send(user)
}

exports.delete = async (req,res) =>{
    const user = await managerModel.findByIdAndUpdae(req.params.id)
    return res.satus(200).send("user deleted")
}