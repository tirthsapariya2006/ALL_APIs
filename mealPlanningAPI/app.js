const express = require("express");
const bodyparser = require("body-parser");
const router = require("./router/mealRouter")

const app = express();

app.use(bodyparser.json());
app.get('/',(rea,res)=>{
    return res.status(200).send("hey")
})
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})