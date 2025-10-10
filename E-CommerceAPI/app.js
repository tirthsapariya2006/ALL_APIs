const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/ecommerceRouter");

const app = express();

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    return res.status(200).send("he")
})
app.listen(3009,()=>{
    console.log("http://localhost:3009")
})
