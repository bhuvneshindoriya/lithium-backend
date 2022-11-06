const { rawListeners } = require('../models/userModel1')
const usermodel = require('../models/userModel1')
const jwt = require("jsonwebtoken")


const createuser = async function (req,res){
    const bodydata = req.body
    const usercreate = await usermodel.create(bodydata)
    res.send ({msg : usercreate})
}
module.exports.createuser=createuser


const loginuser=async function(req,res){
    const emailId = req.body.emailId
    const password = req.body.password
    const userlogin= await usermodel.findOne({emailId:emailId,password:password})
    //res.send({msg : userlogin})
    if (!userlogin){
        return res.send({status : "false",msg: "username or the password is not corerct"})
    }
    let token = jwt.sign({
        userId : userlogin._id.toString(),
        batch : "lithium",
        organisation:"functionUp"
    },
    "bhuvneshindoriyaabcd"
    )
    res.setHeader("x-auth-token",token)
    res.send({status:true,token:token})
}
module.exports.loginuser=loginuser

const getuserDetail = async function(req,res){
    const userID= req.params.userId
    const user = await usermodel.findById(userID)
    res.send({status:true,msg:user})
}

module.exports.getuserDetail = getuserDetail

const update = async function(req,res){

        const userID= req.params.userId
        const { age , firstName } = req.body
        //const token =  req.headers["x-auth-token"]
        const UserData = await  usermodel.findById(userID)
        UserData.age  = age
        UserData.firstName = firstName 
        UserData.save()
        //if(!token){
          //  return res.send({msg : "token is mandotry"})
        //}
        if( !UserData){
            return res.send({ status:false, msg:"no such user found by user_id "})
        }
     res.send({status:true,msg:UserData})   
    }
module.exports.update=update

const delete1= async function(req,res){
    //const token = req.headers["x-auth-token"]
    const userId = req.params.userId
    const _delete = await usermodel.findById(userId)
    _delete.isDeleted = true
    _delete.save()
    // if(!token){
    //     return res.send({msg : "token is mandotry"})
    // }
    // if( !userId){
    //     return res.send({ status:false, msg:"no such user found by user_id "})
    // }
    res.send({status:true,msg: _delete}) 
}
module.exports.delete1=delete1
