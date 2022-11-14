const authorModel=require("../Models/AuthorModel")
const {isValidObjectId} = require ('mongoose')
const blogModel=require("../Models/BlogModel")
const emailvalidator = require('email-validator')

const createAuthor= async function(req,res){
try{    const data=req.body;  
    let {fname,lname,title,email,password}=data
    if(!fname && !lname && !title && !password && !email) return res.status(404).send({status:false,message:"All is mandotary"}) 

    let validemail = emailvalidator.validate(email)
    if(!validemail) return res.status(400).send({status:false,msg:"Invalid E-MAIlID"})
    let authorValidEmail= await authorModel.findOne({email:email})
    if(authorValidEmail) return res.status(404).send({status : true,msg:"This email is already registered"})
    let authorcreate = await authorModel.create(data)
    res.status(201).send({status:true,data:authorcreate})  
}
catch(error){
    res.status(500).send({status:false,message:error.message})
}  
}

// const createBlog = async function(req,res){  
//     try{
//         const id=req.body.authorId
//         const data =req.body
//         const savedata= await blogModel.create(data)
//         if(!isValidObjectId(id)){
//             res.status(400).send({status:false, msg:"Invalid AuthorId"})
//         }
//         res.status(201).send({status:true,data:savedata})
//     }
//         catch(error){
//             res.status(500).send({status:false, data:error.message})
//         }
//     }







    module.exports.createAuthor=createAuthor
   // module.exports.createBlog=createBlog