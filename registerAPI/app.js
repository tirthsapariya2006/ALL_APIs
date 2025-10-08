const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/registerRouter");

const app = express();

app.use(bodyparser.json());

// app.use("/api",router);

app.get('/',(req,res)=>{
    return res.status(200).send("hello");
});

app.listen(3002,()=>{
    console.log("http://localhost:3002");
});