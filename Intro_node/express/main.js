const express = require('express');

const app = express()
const puerto = 5000

app.get('/',(req,res)=>{
    res.send('perro')
})

app.listen(puerto,()=>{
    console.log('shit')
})