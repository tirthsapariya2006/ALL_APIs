const gameModel = require("../model/gameModel");

exports.add = async (req,res)=>{
    const game = await new gameModel(req.body);
    return res.status(200).send(game);
}
exports.find = async (req,res)=>{
    const game = await gameModel.findById(req.body);
    return res.status(200).send(game);
}
exports.update = async (req,res)=>{
    const game = await gameModel.findByIdAndUpdate(req.body);
    return res.status(200).send(game);
}
exports.delete = async (req,res)=>{
    const game = await gameModel.findByIdAndDelete(req.body);
    return res.status(200).send(game);
}