const internModel = require('../models/internModel')
const collegeModel=require('../models/collegeModel')


const createIntern = async function(req,res){
   try {let bodyData = req.body
    let { name, email, mobile, collegeName } =bodyData
    let getCollegeId = await collegeModel.findOne({name:collegeName})
    if(!getCollegeId)  return res.status(400).send({ status: false, msg: `Your ${collegeName} is not Exist.` })
    bodyData.collegeId = getCollegeId["_id"]
    let internData = await internModel.create(bodyData)
    //let data= {isDeleted:internData.isDeleted,name:internData.name,email:internData.email,mobile:internData.mobile,collegeId:internData.collegeId}
    res.status(201).send({ status: true, msg: `${name}'s Intern Data Created Sucessfully.`, data: internData })
}catch(error){
    res.status(500).send({status:false,message:error.message})
}}
module.exports={createIntern}