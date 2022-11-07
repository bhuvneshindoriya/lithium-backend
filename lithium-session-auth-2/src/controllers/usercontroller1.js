const usermodel = require('../models/userModel1')
const jwt = require('jsonwebtoken')

const createuser = async function (req, res) {
    const body = req.body
    const usercreate = await usermodel.create(body)
    res.send({ msg: usercreate })
}
module.exports.createuser = createuser

const loginuser = async function (req, res) {
    const emailId = req.body.emailId
    const password = req.body.password
    const userlogin = await usermodel.findOne({ emailId: emailId, password: password })
    if (!userlogin.emailId) {
        return res.send({ msg: "not valid user emailID" })
    }
    else if (!userlogin.password) {
        return res.send({ msg: "not valid password" })
    }
    let token = jwt.sign({
        userId: userlogin._id.toString(),
        batch: "lithium",
        organisation: "FunctionUp"
    },
        "BHUVNESHINDORIYA"
    )
    res.setHeader("x-auth-token", token)
    res.send({ status: true, msg: token })

}
module.exports.loginuser = loginuser


const getuser = async function (req, res) {
    const userId = req.params.userId
    const userget = await usermodel.findById(userId)
    res.send({ msg: userget })
}
module.exports.getuser = getuser

const update = async function (req, res) {
    const userID = req.params.userId
    // console.log(userID);
    const { firstName, age } = req.body
    const userupdate = await usermodel.findOneAndUpdate({ _id: userID }, { firstName: firstName, age: age }, { new: true })
    //console.log(userupdate);
    res.send({ msg: userupdate })
}
module.exports.update = update

const deleteuser = async function (req, res) {
    const userId = req.params.userId
    const userdelete = await usermodel.findById(userId)
    userdelete.isDeleted = true
    res.send({ msg: userdelete })
}
module.exports.deleteuser = deleteuser