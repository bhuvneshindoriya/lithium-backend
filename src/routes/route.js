const express = require('express');
const router = express.Router();

// router.get('/students/:name', function(req, res) {
//     let studentName = req.params.name
//     console.log(studentName)
//     res.send(studentName)
// })

// router.get("/random" , function(req, res) {
//     res.send("hi there")
// })


// router.get("/test-api" , function(req, res) {
//     res.send("hi FunctionUp")
// })


// router.get("/test-api-2" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API")
// })


// router.get("/test-api-3" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
// })


// router.get("/test-api-4" , function(req, res) {
//     res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })



// router.get("/test-api-5" , function(req, res) {
//     res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
// })

// router.get("/test-api-6" , function(req, res) {
//     res.send({a:56, b: 45})
// })

// router.post("/test-post", function(req, res) {
//     res.send([ 23, 45 , 6])
// })


// router.post("/test-post-2", function(req, res) {
//     res.send(  { msg: "hi" , status: true }  )
// })

// router.post("/test-post-3", function(req, res) {
//     // let id = req.body.user
//     // let pwd= req.body.password

//     // console.log( id , pwd)

//     console.log( req.body )

//     res.send(  { msg: "hi" , status: true }  )
// })



// router.post("/test-post-4", function(req, res) {
//     let arr= [ 12, "functionup"]
//     let ele= req.body.element
//     arr.push(ele)
//     res.send(  { msg: arr , status: true }  )
// })


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]
 
   router.post('/players', function (req, res) {
    let ply = req.body
    for(let i=0;i<ply.length;i++){
        let count =0
        for(let l=0;l<players.length;l++){
            if(ply[i].name==players[l].name){
                count++
            }
        }
        if(count==0)
        {
            players.push(ply[i])
        }
        
    }
    res.send({data:players,status:true})      
})
module.exports = router;
//-------------------------- Assignment Consecutive Numbers 1-------------------------------
//    router.get('/sol1',function(req,res){
//     let arr = [1,2,3,5,6,7]
//     let n = arr[arr.length-1]
//     let o = (n*(n+1)/2)
//     let sum = 0
//     for(let i=0;i<arr.length;i++){
//         sum = sum+arr[i]
//     }
//     let missing = o-sum
//     res.send({ key : missing})

//    })

// //-------------------------- Assignment Consecutive Numbers 2-------------------------------

//    router.get('/sol2',function(req,res){
//     let arr = [33,34,35,37,38,39]
//     let a = arr.length+1
//     let b = (arr[arr.length-1])
//     let c = (arr[0])
//     let d = (a*(c+b))/2
//     let num =0
//     for(let i=0;i<arr.length;i++){
//         num = num+arr[i]
//     }
//     let x = (d-num)
//     res.send({x})
//    })

