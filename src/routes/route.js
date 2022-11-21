const express = require('express')
const router= express.Router()

router.get('/test', function(req,res){
    console.log("succesfully...")
})


module.exports=router