
const mongoose = require('mongoose')
const authorSachema = new mongoose.Schema({
    author_id : {
        type : Number,
        require : true 
    },
    authorName : String,
    age:Number,
    address:String
})

module.exports =  mongoose.model('NewAuthor', authorSachema)