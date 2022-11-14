const blogModel = require('../Models/BlogModel')
const authorModel = require('../Models/AuthorModel')
//const {isValidObjectId} = require ('mongoose')

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

const getblogs = async function(req,res){
    try{
        let data = req.query
        const {authorId,category,subcategory,tag}=data
        if(Object.keys(data).length===0){
        let blogsdata = await blogModel.find({isDeleted : false,isPublished:true})
        if(blogsdata.length===0){
            return res.status(404).send({status:false,msg:"blogs not found"})
        }
        else{
            return res.status(200).send({status:true,data:blogsdata})
        }}
        if(Object.keys(data).length>0){
            let blogsdata2=await blogModel.find({$and:[{isDeleted:false,isPublished:true},{$or:[{authorId:authorId},{category:category},{subcategory:subcategory},{tag:tag}]}]})
            if(blogsdata2.length===0) return res.status(404).send({status:false,msg:"This blog is not found"})
            res.status(200).send({status:true,data:blogsdata2})
        }
    }
    catch(error){
        res.status(500).send({status:false,message:error.message})
    }
}


const getblogs1=  async function(req,res){
    try{
        let query = req.query
        const blog = await blogModel.find(query)
        if(blog.length==0){
            return res.status(404).send({status : false,msg : "No blogs are found"})
        }
        for(let i=0;i<blog.length;i++){
        if(blog[i].isDeleted==false&&blog[i].isPublished==true){
            return res.status(200).send({status:true,data:blog})
        }
        }
    }
    catch(error){
        return res.status(500).send({status:false,message:error.message})
    }
} 
module.exports.getblogs1=getblogs1
module.exports.getblogs=getblogs
module.exports.createblog = createblog