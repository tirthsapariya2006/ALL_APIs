const mealModel = require("../model/mealModel");

exports.add = async (req,res)=>{
    const meal = await new mealModel(req.body);
    return res.status(200).send(meal);
}
exports.find = async (req,res)=>{
    const meal = await mealModel.findById(req.params.id);
    return res.status(200).send(meal);
}
exports.update = async (req,res)=>{
    const meal = await mealModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(meal);
}
exports.delete = async (req,res)=>{
    const meal = await mealModel.findByIdAndUpdate(req.params.id);
    return res.status(200).send("meal deleted");
}