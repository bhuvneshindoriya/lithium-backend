const express = require('express')
const route = require('./routes/route')
const app = express()
const mongoose = require('mongoose')
app.use(express.json())


mongoose.connect('mongodb+srv://kfarzan13:Farzankh13@demodb.dclp2mx.mongodb.net/group2Database?retryWrites=true&w=majority',{useNewUrlParser:true})
.then(()=>console.log("MongoDb is connected"))
.catch((error)=>console.log(error.message))

app.use('/',route)
app.listen(3000 ,function(){
    console.log("Running on 3000")
})
