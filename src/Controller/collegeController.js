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
        console.log(collegeName)

        if(Object.keys(filter).length == 0) return res.status(400).send({ status: false, message: "filters are required !!!" })

        let getCollegeData = await collegeModel.findOne({ name : collegeName }).select({ name : 1 , fullName : 1 , logoLink : 1 })
        console.log(getCollegeData)

        if(!getCollegeData)  return res.status(404).send({ status: false, message: "College not found." })

        let collegeId = getCollegeData._id
        console.log(collegeId)

        let dataOfInterns = await internModel.find({collegeId : collegeId}).select({ name : 1 , email : 1 , mobile : 1 })
        console.log(dataOfInterns)

        getCollegeData.interns = dataOfInterns
        console.log(getCollegeData)

        res.status(200).send({ status: true, data: getCollegeData })

    } catch (err) {
        res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { createCollege , getCollegeData }