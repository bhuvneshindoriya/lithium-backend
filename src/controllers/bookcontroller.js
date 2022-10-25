const bookmodel = require("../models/bookmodel")
//const UserModel= require("../models/bookmodel")
const createBook = async function(req,res){
    let data = req.body
    let saveData = await bookmodel.create(data)
    res.send({msg: saveData})
}
const getbookData = async function(req,res){
    let allUsers= await bookmodel.find()
    res.send({mes:allUsers})
}
module.exports.createBook=createBook
module.exports.getbookData=getbookData