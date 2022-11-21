const express = require('express')
const router= express.Router()
const internController= require('../controller/internController')
const collegesController=require('../Controller/collegeController')

router.get('/test', function(req,res){
    console.log("succesfully...")
})

router.post('/functionup/interns',internController.createIntern)

router.post('/functionup/colleges',collegesController.createColleges)

module.exports=router