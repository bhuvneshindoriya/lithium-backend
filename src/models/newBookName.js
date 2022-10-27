 const mongoose = require('mongoose')


// const bookSchema = new mongoose.Schema
const booksSchema = new mongoose.Schema({
    author_id : {
        type : Number,
    require: true},
    name: String,
    price:Number,
    rating:Number
})


module.exports = mongoose.model('Newbooks',booksSchema)