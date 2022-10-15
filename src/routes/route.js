const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../lg')
const abc1 = require('../logger/Logger')
const abc2 = require('../util/helper')
const abc3 = require('../validator/formatter')
const abc4 = require('../lodash')
//importing external package
const underscore = require('underscore')
//const lodash =require('lodash')

router.get('/test-me', function (req, res) {
    //Calling the components of a different custom module
    console.log(abc1.welcome());
    console.log(abc2.monthdateday());
    console.log(abc3.trim_string());
    console.log(abc4.chunk_arr);
    console.log(abc4.tail_arr);
    console.log(abc4.union_arr)
    console.log(abc4.lodash_frompairs);
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
});

module.exports = router;

