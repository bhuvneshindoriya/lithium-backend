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

router.put('/blogs/:blogId',authorcontroller.putBlogs)
router.delete('/blogs/:blogId',authorcontroller.deleteblogs)
router.delete('/delete',authorcontroller.deleteblogs1)

// router.post('/createBlog', userController.createBlog)

module.exports=router  




//router.get('/blogs1',authorcontroller.getblogs1)