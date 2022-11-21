const collegeModel = require('../models/collegeModel')
const { findOne } = require('../models/internModel')
const internModel = require('../models/internModel')

const createCollege = async function(req , res){

    try{

    let data = req.body
    const { name, fullName, logoLink } = data

    if(!name) return res.status(400).send({ status: false, message: "Name is required !!!" })
    if(!fullName) return res.status(400).send({ status: false, message: "FullName is required !!!" })
    if(!logoLink) return res.status(400).send({ status: false, message: "LogoLink is required !!!" })

    let savedData = await collegeModel.create(data)
    res.status(201).send({ status: true, data: savedData })

    } catch(err){
        res.status(500).send({ status: false, message: err.message })
    }
}

const getCollegeData = async function(req , res){

    try {

        let filter = req.query
        let { collegeName } = filter

        if(Object.keys(filter).length == 0) return res.status(400).send({ status: false, message: "filters are required !!!" })

        if(!collegeName) return res.status(400).send({ status: false, message: "collegeName is required !!!" })

        let getCollegeData = await collegeModel.findOne({ name : collegeName }).select({ name : 1 , fullName : 1 , logoLink : 1 })

        if(!getCollegeData)  return res.status(404).send({ status: false, message: "College not found." })

        let collegeId = getCollegeData._id

        let dataOfInterns = await internModel.find({collegeId : collegeId}).select({ name : 1 , email : 1 , mobile : 1 })

        let obj = {
            name : getCollegeData.name,
            fullName : getCollegeData.fullName,
            logoLink : getCollegeData.logoLink,
            interns : dataOfInterns
        }

        res.status(200).send({ status: true, data: obj })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { createCollege , getCollegeData }