const express = require("express");
const bodyparser = require("body-parser")
const musicRouter = require("./router/musicRouter");

const app = express();

app.use(bodyparser.json());

app.get('/',(req,res)=>{
    return res.status(200).send("hello")
});
// app.get('/',musicRouter);

app.listen(3000,()=>{
    console.log("server stated")
});
