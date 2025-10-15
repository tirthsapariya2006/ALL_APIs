const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/apiRouter")

const app = express();

app.use(bodyparser.json())
app.get('/',(req,res)=>{
    return res.status(200).send("hellooo...")
})
app.listen(3000,()=>(
    console.log("http://localhost:3000")
))