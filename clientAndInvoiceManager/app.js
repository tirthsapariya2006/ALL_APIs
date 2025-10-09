const express = require("express");
const bodyparser = require("body-parser");
const router = require("./Router/clientAndInvoiceManagerRouter"); 

const app = express();

app.use(bodyparser.json());
app.use('/',router);
app.get('/',(req,res)=>{
    return res.status(200).send("hello world")
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
});