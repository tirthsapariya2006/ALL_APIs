const feedbackModel = require('../model/feedbackModel');

exports.addfeedback = async (req,res) => {
    try{
        const {name , rating} = req.body;
        const feedback = new feedbackModel(name,rating);
        await feedback.save();
        res.status(200).send(feedback);
    }catch(error){
        console.log(error);
    }
}

exports.getallfedback = async (req,res) => {
    try{
        const feedback = feedbackModel.find();
        await res.status(200).send(feedback);
    }catch(error){
        console.log(error)
    }
}

exports.deletefeedack = async (req,res) => {
    try{
        const feedbsck = feedbackModel.findByIdAndDelete(req.params.id);
        await res.status(200).send(feedback);
    }catch(error){
        console.log(error)
    }
}