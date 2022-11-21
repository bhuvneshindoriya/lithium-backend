const express = require('express')
const route = require('./routes/route')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())


mongoose.conntect('',{useNewUrlParser:true})
.then(()=>console.log("MongoDb is conneted"))
.catch((error)=>console.log(error.message))

app.use('/',route)
app.listen(3000 ,function(){
    console.log("Running on 3000")
})
