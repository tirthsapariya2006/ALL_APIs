const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/noteRouter")

const app = express();

app.use(bodyparser.json());
app.get("/",(req,res)=>{
    return res.status(200).send("htlloooo")
})
app.listen(3000,()=>{
    console.log("https://localhost:3000")
})