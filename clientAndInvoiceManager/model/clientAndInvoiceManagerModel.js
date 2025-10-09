const mongoose = require("mongoose");

const clientAndInvoiceManagerSchema = new mongoose.Schema({
    client : {type:String,required:true},
    invoice : {type:String,required:true},
    payment : {type:String,required:true},
})

module.exports = mongoose.model("clients",clientAndInvoiceManagerSchema);