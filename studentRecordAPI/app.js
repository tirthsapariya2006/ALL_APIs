const express = require("express");
const bodyparser = require("body-parser");
const recordRouter = require("./router/recordRouter");

const app = express();

app.use(bodyparser.json());
app.use("/api",recordRouter);

app.get('/',(req,res)=>{
    return res.status(200).send("hello world")
})

app.listen(3000,()=>{
    console.log("http://localhost:3000")
})