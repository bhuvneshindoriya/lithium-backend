const Book_model =require('../models/newBookName')
const authorBook_model = require('../models/authorNewModel')

const book_data =async function(req,res){
    let data = req.body
    let books = await Book_model.create(data)
    res.send(books)
    
}

const author_data= async function(req,res){
    let data = req.body
    let author=await authorBook_model.create(data)
    res.send(author)
}

const findParticularBook = async function(req,res){
    let author_ = await authorBook_model.findOne({authorName:"Chetan Bhagat"})
    let authorid = author_.author_id
    let books_new = await Book_model.find({author_id : authorid})
   // author_id
   console.log(books_new)
    res.send({msg:books_new})
}
const updateBooks = async function(req,res){
let findauthorNameId = await Book_model.findOneAndUpdate({
    name:"Two states"},
    {$set : {price:100}},
    {new:true}
    )
let author_Name =await authorBook_model.findOne({author_id : findauthorNameId.author_id})

res.send({msg: findauthorNameId.price,res:author_Name.authorName})
}

const booksfromprice = async function(req,res){
    let find_ =await Book_model.find({price :{$gte:50,$lte:100}})
    let arr=[]
    for(let i=0;i<find_.length;i++){
        let id = find_[i].author_id
        let authorName=await authorBook_model.findOne({author_id:id}).select({authorName:1,author_id:1,_id:0})
        arr.push(authorName)
    } 
    res.send({msg:arr})
}
module.exports.book_data=book_data
module.exports.author_data = author_data
module.exports.updateBooks=updateBooks
module.exports.findParticularBook=findParticularBook
module.exports.booksfromprice=booksfromprice