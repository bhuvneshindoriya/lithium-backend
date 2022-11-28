//const { query } = require('express')
const collegeModel = require('../models/collegeModel')
const internModel = require('../models/internModel')
const { isValidString , collegenameValidation , logoLinkValidator } = require('../Validator/validator')

const createCollege = async function(req , res){
    res.setHeader('Access-Control-Allow-Origin','*')
    try{

    let data = req.body
    const { name, fullName, logoLink } = data

    if(!name) return res.status(400).send({ status: false, message: "College Name is required !!!" })
    if(!isValidString(name)) return res.status(400).send({ status: false, message: "College Name is required !!!" })
   if(!collegenameValidation(name)) return res.status(400).send({ status : false , message : "College Name is invalid !!!" })

    let nameCheck = await collegeModel.findOne({ name : name })

    if(nameCheck) return res.status(400).send({ status : false , message : "College Name already in use." })

    if(!fullName) return res.status(400).send({ status: false, message: "FullName is required !!!" })
    if(!isValidString(fullName)) return res.status(400).send({ status: false, message: "FullName is invalid !!!" })

    if(!logoLink) return res.status(400).send({ status: false, message: "LogoLink is required !!!" })
    ///if(!isValidString(logoLink)) return res.status(400).send({ status: false, message: "LogoLink is required !!!" })
    if(!logoLinkValidator(logoLink)) return res.status(400).send({ status: false, message: "LogoLink is invalid !!!" })

    let savedData = await collegeModel.create(data)
    res.status(201).send({ status: true, data: savedData })

    } catch(err){
        res.status(500).send({ status: false, message: err.message })
    }
}

const getCollegeData = async function(req , res){

    try {
        res.setHeader('Access-Control-Allow-Origin','*')
    let filter = req.query
    let { collegeName } = filter

    if(Object.keys(filter).length == 0) return res.status(400).send({ status: false, message: "Filters are required !!!" })

    if(!collegeName) return res.status(400).send({ status: false, message: "College Name is required !!!" })
    if(!isValidString(collegeName)) return res.status(400).send({ status: false, message: "College Name is required !!!" })

    let getCollegeData = await collegeModel.findOne({ name : collegeName , isDeleted : false }).select({ name : 1 , fullName : 1 , logoLink : 1 })

    if(!getCollegeData)  return res.status(404).send({ status: false, message: "College not found." })

    let collegeId = getCollegeData._id

    let dataOfInterns = await internModel.find({ collegeId : collegeId , isDeleted : false }).select({ name : 1 , email : 1 , mobile : 1 })

    if(dataOfInterns.length == 0) dataOfInterns = "No intern data available."

    let collegeDetails = {
        name : getCollegeData.name,
        fullName : getCollegeData.fullName,
        logoLink : getCollegeData.logoLink,
        interns : dataOfInterns
    }

    res.status(200).send({ status: true, data: collegeDetails })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

module.exports= { createCollege , getCollegeData }


// const isValidEmail = function (mail) {
//     if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
//       return true;
//     }
//   }



