const axios=require("axios")

const getall = async function(req,res){
    try{
        let options ={
            method : "get",
            url:`https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        return res.send({status : true ,msg : result.data})
    }
    catch(error){
        return res.send({status:false,msg:error.message})
    }
}
module.exports.getall=getall

const getone = async function (req,res){
    try{
    let template_id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let username = req.query.username
    let password = req.query.password
    let options = {
        method : "get",
        url :`https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
    }
    let result = await axios(options)
    return res.status(200).send({status:true,msg:result.data})
}
catch(error){
    return res.status(500).send({msg:error.message})
}
}
module.exports.getone=getone