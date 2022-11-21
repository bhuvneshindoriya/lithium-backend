const collegeModel=require('../models/collegeModel')


const createCollege= async function(req,res){
    try{
        let data=req.body
        const {name,fullName,logoLink}=data
        if(!name) return res.status(400).send({status:false,message:"Name is required !!!"})
        if(!fullName) return res.status(400).send({status:false,message:"FullName is required !!!"})
        if(!logoLink) return res.status(400).send({status:false,message:"LogoLink is required !!!"})
       // if(!data && Object.keys(data).length==0) return res.status(404).send({status:false,message:"All is mandotary"})
        let savedata= await collegeModel.create(data)
        res.status(201).send({status:true, data:savedata})
    }
    catch(err){
        res.status(500).send({status:false,message:err.message})
    }
       
}

module.exports.createCollege=createCollege