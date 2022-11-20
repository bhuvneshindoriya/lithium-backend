const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId
const blogschema = new mongoose.Schema(
   {
      title: {
         type: String,
         require: true,
      },
      body: {
         type: String,
         require: true,
      },
      authorId: {
         type: ObjectId,
         ref: "author",
         require: true,
      },
      tags: {
         type: [String],
      },
      category: {
         type: String,
         require: true,
      },
      subcategory: [String],
      DeletedAt: {
         type: Date,
      },
      isDeleted: {
         type: Boolean,
         default: false
      },
      publishedAt: {
         type: Date,
      },
      isPublished: {
         type: Boolean,
         default: false
      },
   }, { timestamps: true });
module.exports = mongoose.model('Blog', blogschema);  



