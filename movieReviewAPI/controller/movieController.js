const movieModel = require("../model/movieModel");

exports.add = async (req,res) => {
    const movie = await new movieModel(req.body);
    return res.status(200).send(movie)
}

exports.find = async (req,res) => {
    const movie = await movieModel.findById(req.params.id);
    return res.status(200).send(movie)
}

exports.update = async (req,res) => {
    const movie = await movieModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(movie)
}

exports.delete = async (req,res) => {
    const movie = await movieModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("movie deleted")
}


