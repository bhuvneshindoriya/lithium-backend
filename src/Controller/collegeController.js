const collegesModels=require('../Models/collegeModel')


const functionupColleges= async function(req,res){
    let data=req.body
    if(!data && Object.keys(data).length==0) return res.status(404).send({status:false,message:"All is mandotary"})
    let savedata= await collegesModels.creat(data)
    res.status(201).send({status:true, data:savedata})
    
}

