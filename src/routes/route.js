const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const userController1= require("../controllers/usercontroller1")
const middleware = require("../middleware/auth")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.post("/create-user",userController1.createuser)
router.post("/login-user",  userController1.loginuser)
router.get("/get-user/:userId",middleware.userDetails, userController1.getuserDetail)
router.put("/update-user/:userId",middleware.userDetails, userController1.update)
router.delete("/delete-user/:userId", middleware.userDetails ,userController1.delete1)
//router.get("/user/:userId",middleware.GetUser,userController1.getuser)







// router.post("/users", userController.createUser  )

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)

// router.put("/users/:userId", userController.updateUser)

module.exports = router;