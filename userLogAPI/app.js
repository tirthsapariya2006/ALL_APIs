const express = require('express');
const bodyparser = require('body-parser');
const userRouter = require('./router/userRouter');

const app = express();

app.use(bodyparser.json());
app.use('/',userRouter);
app.get('/',(req,res)=>{
    return res.status(200).send('hello')
})
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})
