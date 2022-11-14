const express=require('express')
const userController=require('../controllers/userController')
const router=express()

  
router.get("/test-me",function(req,res){
    res.status(200).send("done")
})

router.post('/createAuthors', userController.createAuthor)
router.post('/createBlog', userController.createBlog)

module.exports=router  