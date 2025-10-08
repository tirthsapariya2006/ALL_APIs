const express = require("express");
const bodyparser = require("body-parser");
const movieRouter = require("./router/movieRouter")

const app = express();

app.use(bodyparser.json());
app.use('/api',movieRouter);

app.get('/',(req,res)=>{
    return res.status(200).send("hello")
})

app.listen(3000,()=>{
    console.log("hettp://localhost:3000")
})