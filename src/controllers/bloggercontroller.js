const blogModel = require('../Models/BlogModel')
const authorModel = require('../Models/AuthorModel')
const jwt = require('jsonwebtoken')
const { isValidObjectId } = require('mongoose')
const { isValidString } = require("../validator/validator");

const createBlog = async function (req, res) {
  try {
    let data = req.body
    let Id = data.authorId
    if (Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "data is mandatory" })
    const { title, body, authorId, category } = data
    if (!title) return res.status(400).send({ status: false, msg: "title is required" })
    if (!body) return res.status(400).send({ status: false, msg: "body is required" })
    if (!authorId) return res.status(400).send({ status: false, msg: "authorId is required" })
    if (!category) return res.status(400).send({ status: false, msg: "category is required" })

    if (!isValidString(title)) return res.status(400).send({ status: false, msg: "title is not valid" })
    if (!isValidString(body)) return res.status(400).send({ status: false, msg: "body is not valid" })
    if (!isValidString(category)) return res.status(400).send({ status: false, msg: "category is not valid" })

    let id = await authorModel.findById(Id)
    if (!id) return res.status(400).send({ status: false, msg: "authorId does not exist" })
    const Authordata = await blogModel.create(data)
    return res.status(201).send({ status: true, data: Authordata })
  }
  catch (error) {
    res.status(500).send({ status: false, msg: error.message })
  }
}

const getBlogs = async function (req, res) {
  try {
    let query = req.query
    const blog = await blogModel.find({
      $and: [{ isDeleted: false, isPublished: true }, query]
    })
    if (blog) {
      return res.status(200).send({ status: true, data: blog })
    } else {
      return res.status(404).send({ status: false, msg: "no found" })
    }
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message })
  }
}

const updateBlog = async (req, res) => {
  try {
    let blogId = req.params.blogId;
    if (blogId.length == 0)
      return res.status(400).send({ status: false, msg: "blogId is required" });
    if (!isValidObjectId(blogId))
      res.status(400).send({ status: false, msg: "invalid blog id" });
    let blog = await blogModel.findById(blogId);
    if (!blog) return res.status(404).send({ msg: "Blog Doesn't Exist" });
    let data = req.body;
    let updatedBlog = await blogModel.findOneAndUpdate(
      { _id: blogId, isDeleted: false },
      {
        $set: {
          title: data.title,
          body: data.body,
          category: data.category,
          isPublished: true,
          publishedAt: Date.now()
        },
        $push: {
          subcategory: req.body.subcategory,
          tags: req.body.tags
        },
      },
      { new: true }
    );
    res.status(200).send({ status: true, data: updatedBlog, message: "Update Successfully" });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};



const deleteByparams = async function (req, res) {
  try {
    const blogId = req.params.blogId
    const delete1 = await blogModel.findById(blogId)
    if (delete1.isDeleted == true) return res.status(400).send({ status: false, msg: "already deleted" })
    if (!delete1) return res.status(404).send({ status: false, msg: "users not found" })
    const updated = await blogModel.findOneAndUpdate({ _id: blogId }, { isDeleted: true, DeletedAt: Date.now() }, { new: true })

    return res.status(200).send({ status: true, data: updated })
  }
  catch (error) {
    return res.status(500).send({ status: false, message: error.message })
  }
}



const deleteBlogQuery = async (req, res) => {
  try {

    let checkId = await blogModel.find(req.query).select({ _id: 0, authorId: 1 })
    if (checkId.length == 0) {
      return res.status(404).send({ status: false, msg: "No Blog found" })
    }
    let count = 0
    for (let i = 0; i < checkId.length; i++) {
      if (checkId[i].authorId == req.decoded.authorId) {
        count++
      }
    }
    if (count == 0) return res.status(404).send({ status: false, msg: "Unauthorised author" })

    const blogs = await blogModel.updateMany({ $and: [{ isDeleted: false, authorId: req.decoded.authorId }, req.query] }, { isDeleted: true, deletedAt: new Date(Date.now()) }, { new: true });

    if (blogs.modifiedCount > 0) {
      res.status(200).send({
        status: true,
        msg: `${blogs.modifiedCount} blog deleted successfully!`
      })
    } else {
      res.status(404).send({
        status: false,
        msg: "Blog is already deleted"
      })
    }
  } catch (error) {
    res.status(500).send({
      status: false,
      error: error.message
    });
  }
};

module.exports={createBlog,getBlogs,updateBlog,deleteByparams,deleteBlogQuery}