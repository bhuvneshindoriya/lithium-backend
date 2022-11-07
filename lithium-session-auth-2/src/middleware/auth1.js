

const jwt = require('jsonwebtoken')
const { isValidObjectId } = require('mongoose')


const mid4 = async function (req,res,next){
    const userId= req.params.userId
    const token = req.headers["x-auth-token"]
    try {
    if( !userId){
        return res.send({msg:'your userid is mandatory'})
    }else if(!token ){
        return res.send({msg:'your token is mandatory'})
    }
    else if(!isValidObjectId(userId)){
    return res.send({msg:'your userid is invalid'})
    }

    
       const validToken =  jwt.verify(token,"BHUVNESHINDORIYA" )
       if(validToken.userId != userId){
        return res.send({ status: false, msg: "userid is not authorised" })
       }
    
    } catch (error) {
        // res.send('')
        return res.send({ status: false, msg: "token is invalid" });
    }

    next()
   
} 

module.exports.mid4 = mid4