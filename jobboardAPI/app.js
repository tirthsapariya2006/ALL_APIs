const express = require('express');
const bodyparser = require("body-parser");
const jobRouter = require("./router/jobRouter"); 

const app = express();
 
app.use(bodyparser.json());
app.use('/api',jobRouter);

app.get('/',(req,res)=>{
    return res.status(200).send("hello")
});

app.listen(3000,()=>{
    console.log("http://localhost:3000")
});