const express = require("express");
const bodyparser = require("body-parser");
const busticketRouter = require('./router/bustcketRouter') 

const index = express();

index.use(bodyparser.json());
index.use("/api",busticketRouter);
index.get('/',(req,res)=>{
    return res.status(200).send("hey");
})
index.listen(3000,()=>{
    console.log("http://localhost:3000")
})