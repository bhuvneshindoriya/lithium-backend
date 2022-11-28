 const internModel = require('../models/internModel')
 const collegeModel = require('../models/collegeModel')
//const { findOne } = require('../models/collegeModel')
const emailValidator = require('email-validator')
const { isValidString , nameValidation , mobileValidation } = require('../Validator/validator')

const createIntern = async function(req , res){
    res.setHeader('Access-Control-Allow-Origin','*')
    try {
    let bodyData = req.body
    console.log(bodyData);
    let { name, email, mobile, collegeName } = bodyData

    if(!name) return res.status(400).send({ status: false, message: "Name is required !!!" })
    if(!isValidString(name)) return res.status(400).send({ status: false, message: "Name is required !!!" })
    if(!nameValidation(name)) return res.status(400).send({ status : false , message : "Name is invalid !!!" })

    if(!email) return res.status(400).send({ status: false, message: "Email is required !!!" })
    if(!emailValidator.validate(email)) return res.status(400).send({ status : false , message : "Email id is invalid !!!" })

    let emailCheck = await internModel.findOne({ email : email })
    if(emailCheck) return res.status(400).send({ status : false , message : "Email Id already in use." })

    if(!mobile) return res.status(400).send({ status: false, message: "Mobile is required !!!" })
    if(!mobileValidation(mobile)) return res.status(400).send({ status : false , message : "Mobile number is invalid !!!" })

    let mobileCheck = await internModel.findOne({ mobile : mobile })
    if(mobileCheck) return res.status(400).send({ status : false , message : "Mobile number already in use." })

    if(!collegeName) return res.status(400).send({ status: false, message: "College Name is required !!!" })
    if(!isValidString(collegeName)) return res.status(400).send({ status: false, message: "College Name is required !!!" })

    let getCollegeId = await collegeModel.findOne({ name: collegeName })

    if(!getCollegeId)  return res.status(404).send({ status: false, message: "College Name not found." })

    bodyData.collegeId = getCollegeId._id

    let internData = await internModel.create(bodyData)

    res.status(201).send({ status: true, data: internData })

}catch(error){
    res.status(500).send({ status: false, message: error.message })
}}

module.exports = { createIntern }














