//6d6e266c20b5aa46532f1b9291361bf9
// http://api.openweathermap.org/data/2.5/weather?q=London&appid=<useYourOwnAppId>
const axios = require("axios")
let onlylondonweather = async function(req,res){
    try{
        let londonkey = req.query.appid
        let options={
            method : "get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${londonkey}`
        }
        let result = await axios(options)
        res.status(200).send({status:true,msg:result.data})
    }
    catch(error){
        res.status(200).send({msg:error.message})
    }
}
module.exports.onlylondonweather=onlylondonweather

const city=async function(req,res){
    let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
    try{
        let array = []
        for(let i=0;i<cities.length;i++){
            let q = cities[i]
            let key = req.query.appid
            let options={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${key}`
            }
            let result=await axios(options)
            array.push({city:result.data.name,temp:result.data.main.temp})
        }
        array.sort((a,b)=>{return a.temp-b.temp})
        res.status(200).send({status:true,msg:array})
    }
    catch(error){
        return res.status(500).send({status:false,msg:error.message})
    }
}
module.exports.city=city