const musicModel = require("../model/musicModel");

exports.addmusic = async (req,res) => {
    const music = await new musicModel(req.body);
    return res.status(200).send(music)
}

exports.findmusic = async (req,res) => {
    const music = musicModel.findById(req.params.id);
    return res.status(200).send(music);
}

exports.deletemusic = async (req,res) => {
    const music = musicModel.findByIdAndDelete(req.params.id);
    res.status(200).send("music deleted");
}
