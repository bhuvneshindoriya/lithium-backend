const express=require('express')
const userController=require('../controllers/userController')
const router=express()


router.get("/test-me",function(req,res){
    res.status(200).send("done")
})

// router.post('/creat-authors', userController.creatAuthor)
// router.post('/creat-blog', userController.createBlog)

module.exports=router