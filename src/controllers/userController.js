const authorModel=require("../Models/AuthorModel")
const {isValidObjectId} = require ('mongoose')
const blogModel=require("../Models/BlogModel")


const createAuthor= async function(req,res){
try{    const data=req.body;  
     const savedata=await authorModel.create(data)
 
   res.status(201).send({status:true, data:savedata})  
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