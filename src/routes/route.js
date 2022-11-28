const express = require('express')
const router= express.Router()
const collegeController=require('../Controller/collegeController')
const internController= require('../controller/internController')

// API to create College

router.post('/functionup/colleges',collegeController.createCollege)

// API to create Intern

router.post('/functionup/interns',internController.createIntern)

// API to get college Details

router.get('/functionup/collegeDetails',collegeController.getCollegeData)


module.exports = router

    
    