const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const userController1 = require("../controllers/usercontroller1")
const middleware = require("../middleware/auth1")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/create-user", userController1.createuser)
router.post("/loginUser", userController1.loginuser)
router.get("/get-user/:userId", middleware.mid4, userController1.getuser)
router.put("/update-user/:userId", middleware.mid4, userController1.update)
router.delete("/delete-user/:userId", middleware.mid4, userController1.deleteuser)






// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

module.exports = router;