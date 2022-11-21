const express = require('express')
const router= express.Router()
const internController= require('../controller/internController') 

router.get('/test', function(req,res){
    console.log("succesfully...")
})

router.post('/functionup/interns',internController.createIntern)
module.exports=router