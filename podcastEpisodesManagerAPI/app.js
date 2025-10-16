const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/podcatRouter')

const app = express();

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    return res.status(200).send('hello')
})
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})