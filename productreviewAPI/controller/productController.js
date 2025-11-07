const productModel = require("../model/productModel");

exports.add = async (req,res)=>{
    const product =await new productModel(req.body);
    return res.status(200).send(product)
}
exports.find = async (req,res)=>{
    const product = await productModel.findById(req.params.id);
    return res.status(200).send(product)
}
exports.update = async (req,res)=>{
    const product = await productModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
    return res.status(200).send(product)
}
exports.delete = async (req,res)=>{
    const product = await productModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("product deleted")
}