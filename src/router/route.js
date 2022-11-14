const express=require('express')
const userController=require('../controllers/authorController')
const authorcontroller=require('../controllers/bloggercontroller')
const router=express()

  
router.get("/test-me",function(req,res){
    res.status(200).send("done")
})

router.post('/authors', userController.createAuthor)
router.post('/blogs',authorcontroller.createblog)
router.get('/blogs',authorcontroller.getblogs)
//router.post('/createBlog', userController.createBlog)

module.exports=router  




//router.get('/blogs1',authorcontroller.getblogs1)