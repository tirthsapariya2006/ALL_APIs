const express = require('express');
const bodyparser = require('body-parser');
const customerRouter = require('./router/customerRouter')

const app = express();

app.use(bodyparser.json());
app.get('/',(req,res)=>{
    return res.status(200).send('hy')
})
app.use('/api',customerRouter)
app.listen(3000,()=>{
    console.log('http://localhost:3000')
})