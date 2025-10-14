const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/videoRouter")

const app = express();

app.use(bodyparser.json());
app.get("/",(req,res)=>{
    return res.status(200).send("hello world")
})
app.listen(4000,()=>{
    console.log("http://loclhost:4000")
})