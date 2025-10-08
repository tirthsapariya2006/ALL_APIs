const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    console.log("hello");
    return res.status(200).send("hello world");
});

app.listen(3000,()=>{
    console.log("server is running");
});