const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./router/productRouter")

const app = express();

app.use(bodyParser.json());
app.use('/api',productRouter);
app.get('/',(req,res)=>{
   res.status(200).send("hey")
})
app.listen(4000,()=>{
    console.log("http://localhost:4000")
})