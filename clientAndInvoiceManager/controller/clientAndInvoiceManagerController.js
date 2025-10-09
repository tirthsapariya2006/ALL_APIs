const clientAndInvoiceManagerModel = require("../model/clientAndInvoiceManagerModel");

exports.add = async (req,res)=>{
    const client = await new clientAndInvoiceManagerModel(req.body);
    return res.status(200).send(client)
}

exports.find = async (req,res)=>{
    const client = await clientAndInvoiceManagerModel.findById(req.params.id);
    return res.status(200).send(client)
}

exports.update = async (req,res)=>{
    const client = await clientAndInvoiceManagerModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
    return res.status(200).send(client)
}

exports.delete = async (req,res)=>{
    const client = await clientAndInvoiceManagerModel.findByIdAndDelete(req.params.id);
    return res.status(200).send("client deleted")
}
