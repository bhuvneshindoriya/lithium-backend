const express=require('express')
const userController=require('../controllers/authorController')
const authorcontroller=require('../controllers/bloggercontroller')
const middleware = require('../middleware/middleware')
const router=express()

  
router.get("/test-me",function(req,res){
    res.status(200).send("done")
})

router.post('/authors', userController.createAuthor)
router.post('/blogs',authorcontroller.createblog)
router.get('/blogs/:blogId',middleware.authentication, authorcontroller.getblogs)


router.post('/login',authorcontroller.login)
router.put('/blogs/:blogId',   middleware.authentication,middleware.authorisation,authorcontroller.putBlogs)
router.delete('/blogs/:blogId',middleware.authentication,middleware.authorisation,authorcontroller.deleteblogs)
router.delete('/blogs',middleware.authentication,middleware.authorisation,authorcontroller.deleteblogs1)

module.exports=router  



