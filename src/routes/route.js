const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const cowinController1=require("../controllers/axios2")
const cowinController2=require("../controllers/axious3")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)
//router.put("/cowin/getOtp/:districId", CowinController.getOtp)

router.get("/cowinid/district_id",CowinController.findbyid)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/getfindlondon",cowinController1.onlylondonweather)
router.get("/city",cowinController1.city)
//3
router.post("/getall",cowinController2.getall)
router.post("/upone",cowinController2.getone)
module.exports = router;