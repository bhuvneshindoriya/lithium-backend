const express=require('express')
const userController=require('../controllers/userController')
const authorcontroller=require('../controllers/bloggercontroller')
const router=express()

  
router.get("/test-me",function(req,res){
    res.status(200).send("done")
})

router.post('/authors', userController.createAuthor)
router.post('/blogs',authorcontroller.createblog)
//router.post('/createBlog', userController.createBlog)

module.exports=router  