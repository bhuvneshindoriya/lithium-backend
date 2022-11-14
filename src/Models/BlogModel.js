const mongoose= require ("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const blogschema = new mongoose.Schema(
{
    title: {
        type : string,
        require: true,

    },
     body: {
        type : string,
        require: true,

    },
     authorId: {
        type :ObjectId,
        ref:author,
         require: true,

    },
     tags: {
        type:[string],

     },
     category: {
        type :string, 
        require: true,

    },
     subcategory: [],

     DeletedAt:Date,
    
       isDeleted: {
        type :boolean, 
        default: false

    },
     publishedAt: {
        type:Date,
        default:Date.now,
     }, 

     isPublished: {
        type:boolean,
        default: false
    },
  },  { timestamps:true});
    module.exports = mongoose.model('Blog',authorSchema);  //blogs



