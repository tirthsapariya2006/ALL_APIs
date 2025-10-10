const express = require("express");
const bodyParser = require("body-parser");
const router = require("./router/iventoryRouter")

const app = express();

app.use(bodyParser.json());
app.get("/",(req,res)=>{
    return res.status(200).send("hello")
})
app.listen(3008,()=>{
    console.log("https://localhost:3008")
})