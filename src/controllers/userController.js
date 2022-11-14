//const authorModel=require("../model/AuthorModel")
// const {isValidObjectId} = require ('mongoose')
// const blogModel=require("../Models/BlogModel")


// const creatAuthor= async function(req,res){
// try{    const data=req.body;
//     const savedata=await authorModel.creat(data)
//     res.status(201).send({status:true, data:savedata})
// }
// catch(error){
//     res.status(500).send({status:false,message:error.message})
// }
// }

// const createBlog = async function(req,res){
//     try{
//         const id=req.body.author

//         const data =req.body
//         const savedata= await blogModel.create(data)
//         if(!isValidObjectId(id)){
//             res.status(401).send({status:false, msg:"Invalid AuthorId"})
//         }
//         res.status(201).send({status:true,data:savedata})
//     }
//         catch(error){
//             res.status(500).send({status:false, data:error.message})
//         }
//     }







//     module.exports.creatAuthor=creatAuthor
//     module.exports.createBlog=createBlog