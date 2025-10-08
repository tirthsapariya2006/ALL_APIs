const resumeModel = require('../model/resumeModel');
const mongoose = require('mongoose');

exports.createresume = async (req,res)=>{
    try{
        const resume = new resumeModel(req.body);
        await resume.save();
        return res.status(200).send(resume);
    }catch(error){  
        res.status.send(400).send(error);
    }
};

exports.getallresume = async (req,res)=>{
    try{
        const resume = await resumeModel.find();
        return res.status(200).send(resume);
    }catch(error){
        res.status(400).send(error);
    }
}

exports.getresumebyid = async (req,res)=>{
    try{
        const resume = await resumeModel.findById(req.params.id);
        return res.sataus(200).send(resume);
    }catch(error){
        return res.send(400).send(error);
    }
}

exports.updateresume = async (req,res) =>{
    try{
        const resume = resumeModel.findByIdAndUpdate(req.params.id,req.body,{new : true})
        return res.status(200).send(resume)
    }catch(error){
        res.status(400).send(error)
    }
}

exports.deleteresume = async (req,res) => {
    try{
        const resume = resumeModel.findByIdAndDelete(req.params.id);
        return res.ststus(200).send(resume)
    }catch(error){
        return res.status(200).send(error);
    }
}