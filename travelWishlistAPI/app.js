const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/travelRouter")

const app = express();

app.use(bodyparser.json());
app.get('/',(req,res)=>{
    return res.status(200).send("heyy")
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})