const express = require('express')
const router= express.Router()
const collegesController=require('../Controller/collegeController')

router.get('/test', function(req,res){
    console.log("succesfully...")
})

router.post('/functionup/colleges',collegesController.createColleges)

module.exports=router