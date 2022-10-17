const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('My batch is', abc.name)
//     abc.printName()
//     res.send('My second ever api!')
// });

// router.get('/students', function (req, res){
//     console.log("The path params in the request are : ", req.params)
//     let students = ['Sabiha', 'Neha', 'Akash']
//     res.send(students)
// })

//------1------
// router.get('/movies',function(req,res){
//    // console.log("The path params in the request are : ",req.params)
//     let movies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
//     res.send(movies)
// })
//------2------
// router.get('/movies/:indexNumber',function(req,res){
//     let movies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
 
// const Index = req.params.indexNumber
// res.send(movies[Index])
// })

//-------3---------
// let movies =['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
// router.get('/movies/:indexNumber', function(req,res) {
//     let Index = req.params.indexNumber
//     if(Index>movies.length){
//         res.send('use a valid index')
//     }
//     else{
//         res.send(movies[Index])  
//     }
// })
//----------4------

// router.get('/films',function(req,res){
//    let filmsName =  [ { 
//         id: 1,
//         name: 'The Shining'
//        }, {
//         id: 2,
//         name: 'Incendies'
//        }, {
//         id: 3,
//         name: 'Rang de Basanti'
//        }, {
//         id: 4,
//         name: 'Finding Nemo'
//        }]
//        res.send(filmsName)
// })

//-----5-----
router.get('/films/:filmid',function(req,res){
    let filmsName =  [ { 
         id: 1,
         name: 'The Shining'
        }, {
         id: 2,
         name: 'Incendies'
        }, {
         id: 3,
         name: 'Rang de Basanti'
        }, {
         id: 4,
         name: 'Finding Nemo'
        }]
        let indexfilm = req.params
        let count = 0
        for (let i=0;i<filmsName.length;i++){
            if(filmsName[i].id==Number(indexfilm.filmid)){
                count ++
            res.send(filmsName[i])
            }
        }
        if (count==0){
            res.send("No movie exists with this id")
            
        }
 })
 module.exports = router;























// Example 1 for path params
// router.get('/students/:studentName', function(req, res){
//     // ':' denotes that the following part of route is a variable
//     // The value of this variable is what we are sending in the request url after /students
//     // This value is set in the form of an object inside req.params
//     // The object contain key value pairs
//     // key is the variable in the route
//     // value is whatever dynamic value sent in the request url
//     let myParams = req.params

//     // params attribute is fixed in a request object
//     // params contains the path parameters object
//     console.log("The path params in the request are : ", myParams)
//     res.send('The full name is ' + myParams.studentName )
// })

// // Example 2 for path params
// router.get('/student-details/:name', function(req, res){
//     let requestParams = req.params
//     console.log("This is the request ", requestParams)
//     let studentName = requestParams.name
//     console.log('Name of the student is ', studentName)
//     res.send('Dummy response')
// })

