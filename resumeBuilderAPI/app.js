const express = require("express");
const bodyparser = require("body-parser");
const resumeRouter = require("./router/resumeRouter")

const app = express();

app.use(bodyparser.json());
app.get('/',(req,res)=>{
    return res.status(200).send("hy")
})
app.listen(3000,(req,res)=>{
    console.log("http://localhost:3000")
})
