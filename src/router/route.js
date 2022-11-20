const express = require('express')
const blogController = require('../controllers/authorController')
const authorcontroller = require('../controllers/bloggercontroller')
const middleware = require('../middleware/middleware')
const router = express()


router.get("/test-me", function (req, res) {
    res.status(200).send("done")
})

router.post('/authors', blogController.createAuthor)
router.post('/blogs',middleware.authentication,authorcontroller.createBlog)
router.get('/blogs', middleware.authentication, authorcontroller.getBlogs)


router.post('/login', blogController.login)
router.put('/blogs/:blogId', middleware.authentication, middleware.authorisation, authorcontroller.updateBlog)
router.delete('/blogs/:blogId', middleware.authentication, middleware.authorisation, authorcontroller.deleteByparams)
router.delete('/blogs', middleware.authentication, authorcontroller.deleteBlogQuery)

module.exports = router



