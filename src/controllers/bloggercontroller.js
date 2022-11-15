const blogModel = require('../Models/BlogModel')
const authorModel = require('../Models/AuthorModel')
//const {isValidObjectId} = require ('mongoose')
//const moment = require('moment')

const createblog = async function (req, res) {
    try {
        let data = req.body
        let Id = data.authorId
        if (Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "data is mandatory" })
        const {title,body,authorId,category}=data
        if(!title) return res.status(400).send({status:false,msg:"title is required"})
        if(!body) return res.status(400).send({status:false,msg:"body is required"})
        if(!authorId) return res.status(400).send({status:false,msg:"authorId is required"})
        if(!category) return res.status(400).send({status:false,msg:"category is required"})
        
        let id = await authorModel.findById(Id)
        if (!id) return res.status(404).send({ status: false, msg: "Invalid AuthorId" })
        const Authordata = await blogModel.create(data)
        return res.status(201).send({ status: true, data: Authordata })
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}

const getblogs=  async function(req,res){
    try{
        let query = req.query
        const blog = await blogModel.find(query).populate('authorId')
    
        if(blog.length==0){
            return res.status(404).send({status : false,msg : "No blogs are found"})
        }
        for(let i=0;i<blog.length;i++){
        if(blog[i].isDeleted==false&&blog[i].isPublished==true){
            return res.status(200).send({status:true,data:blog,publishedAt:Date.now()})
        }
        else if(blog[i].isDeleted==true&&blog[i].isPublished==true){
            return res.status(402).send({status:false,msg:"not valid"})
        }
        else if(blog[i].isDeleted==true&&blog[i].isPublished==false){
            return res.status(404).send({status:false,msg:"deleted data"})
        }
        }  
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
} 

module.exports.getblogs=getblogs
module.exports.createblog = createblog


const putBlogs = async (req, res) => {
    try {
      let blogId = req.params.blogId;
      if (!blogId)
        return res.status(400).send({ status: false, msg: "blogId is required" });
      //if (!isValidObjectId(blogId))
      if(!blogId.match(/^[0-9a-fA-F]{24}$/))
        res.status(400).send({ status: false, msg: "invalid blog id" });
      let blog = await blogModel.findById(blogId);
      if (!blog) return res.status(404).send({ msg: "Blog Doesn't Exist" });
      let data = req.body;
      let updatedBlog = await blogModel.findOneAndUpdate(
        { _id: blogId, isDeleted: false }, //it will check blog is available or not
        {
          $set: {
            title: data.title,
            body: data.body,
            category: data.category,
  
            //isPublished: true,
          },
          $push: {


         subcategory: req.body.subcategory,
         tags:req.body.tags
          },
        },
        { new: true }
      );
      res.status(200).send({ status:true, data:updatedBlog ,message:"Update Successfully"});
    } catch (err) {
      res.status(500).send({ status: false, msg: err.message });
    }
  };
  module.exports.putBlogs=putBlogs


  const deleteblogs= async function(req,res){
    try{
       const blogId=req.params.blogId
      const delete1 =await blogModel.findById(blogId)
      if(!delete1 && isDeleted==true)return  res.status(404).send({status:false,msg:"users not found" })
      const updated = await  blogModel.findOneAndUpdate({_id:blogId},{isDeleted:true},{new:true}) 
        
      return res.status(200).send({status:true,data: updated})                       
    } 
      catch(error){
        return res.status(500).send({status:false,message:error.message})
    }  
}  

  module.exports.deleteblogs=deleteblogs;

  const deleteblogs1= async function(req,res){
    try{
       const data=req.query
       const deleteData = await blogModel.updateMany(
        {$and:[data,{isDeleted:false}]},
        {$set:{isDeleted:true }},
        {new:true, upsert:true})
        let BlogDelete=deleteData.modifiedCount
        if(deleteData.modifiedCount==0) return res.status(404).send({status: false , msg:"No blog are found for Update"})
        res.status(200).send({status: true, msg:"NUmber of blogs deleted are",BlogDelete, DeletedAt:new Date()})
    }
    catch(error){
         res.status(500).send({status: false, msg: error.message})
    }
}

module.exports.deleteblogs1=deleteblogs1


// let delete1 = async function(req,res){
//     let query = req.query
//     const deletadata = await blogModel.find(query)
//     if(deletadata.isDeleted==true) return res.status(400).send({status:false,msg:"already deleted"})
//     const datadelete= await deletadata.updateMany({isDeleted:true})
//     if(datadelete) return res.status(200).send({status:true,isDeleted:true,DeletedAt:Date.now()})

// } 
// module.exports.delete1=delete1

// const deleteBlog= async function(req,res){
//     try{
//        let data=req.query
//        const {authorId}=data
//        const deleteData = await blogModel.updateMany(

//          {$and:[{authorId:authorId},{isDeleted:false}]},

//          {$set:{isDeleted:true , DeletedAt:new Date()}},

//          {new:true, upsert:true})

//         let BlogDelete=deleteData.modifiedCount
//         if(deleteData.modifiedCount==0) return res.status(404).send({status: false , msg:"No blog are found for Update"})
//         res.status(200).send({status: true, msg:"NUmber of blogs deleted are",BlogDelete, DeletedAt:new Date()})
//     }
//     catch(error){
//          res.status(500).send({status: false, msg: error.message})
//     }
// }
// module.exports.deleteBlog=deleteBlog