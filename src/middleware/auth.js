
const jwt = require('jsonwebtoken')
const { isValidObjectId } = require('mongoose')


const userDetails = async function (req,res,next){
    const userID= req.params.userId
    const token = req.headers["x-auth-token"]
    if( !userID){
        return res.send({msg:'your userid is missing'})
    }else if(!token ){
        return res.send({msg:'your token is missing'})
    }
    else if(!isValidObjectId(userID)){
    return res.send({msg:'your userid invalid'})
    }

    try {
       const validToken =  jwt.verify(token,"bhuvneshindoriyaabcd" )
       if(validToken.userId !== userID){
        return res.send({ status: false, msg: "userid is not match" })
       }
    
    } catch (error) {
        // res.send('')
        return res.send({ status: false, msg: "token is invalid" });
    }

    next()
   
} 

module.exports.userDetails = userDetails



