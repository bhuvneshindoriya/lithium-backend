const UserModel= require("../models/userModel")



const user = async function(req,res){
    let data = req.body
    let createUser=await UserModel.create(data)
    res.send({msg :createUser})
}
const basicCode= async function(req, res) {
    let getUserData  = await UserModel.find()
    res.send({msg : getUserData})
    }
const falana = async function(req,res){
    res.send({msg : "Success"})
}
module.exports.user=user
module.exports.basicCode= basicCode
module.exports.falana=falana
















 // let tokenDataInHeaders= req.headers.token
    // console.log(tokenDataInHeaders)

    //console.log( "HEADER DATA ABOVE")
    //console.log( "hey man, congrats you have reached the Handler")
    //res.send({ msg: "This is coming from controller (handler)"})
// const createUser= async function (req, res) {
//     let data= req.body
//     let savedData= await UserModel.create(data)
//     res.send({msg: savedData})
// }

// const getUsersData= async function (req, res) {
//     let allUsers= await UserModel.find()
//     res.send({msg: allUsers})
// }

//module.exports.createUser= createUser
//module.exports.getUsersData= getUsersData
