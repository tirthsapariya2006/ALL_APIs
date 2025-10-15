const express = require("express");
const bodyparser = require("body-parser");
const actRouter = require("./router/actRouter");

const app = express();

app.use(bodyparser.json());
app.get('/',(rew,res)=>{
    return res.status(200).send("trevis tulla")
})
app.listen(3000,()=>{
    console.log("https://localhost:3000")
})