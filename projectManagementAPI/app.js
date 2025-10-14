const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/projectRouter")

const app = express();

app.use(bodyparser.json());
app.get('/',(Req,res)=>{
    return res.status(200).send("hello bachoo...")
})
app.listen(3070,()=>{
    console.log("http://localhost:3070")
})