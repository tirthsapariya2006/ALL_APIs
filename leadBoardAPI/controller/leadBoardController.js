const leadBoardModel = require("../model/leadBoardModel")

exports.add = async (req,res) => {
    const board = await new leadBoardModel(req.body);
    return res.status(200).send(board)
}

exports.find = async (req,res) => {
    const board = await leadBoardModel.findById(req.body);
    return res.status(200).send(board);
}

exports.update = async (req,res) => {
    const board = await leadBoardModel.findById(req.body,req.params.id,{new:true});
    return res.status(200).send(board);
}

exports.delete = async (req,res) => {
    const board = await leadBoardModel.findById(req.params.id);
    return res.status(200).send("board deleted");
}