const express = require("express")
const bodyparser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyparser.json());

app.get('/',(req,res)=>{
    console.log("hello");
    res.send("hello world");
});

app.listen(port,()=>{
    console.log("hello");
})