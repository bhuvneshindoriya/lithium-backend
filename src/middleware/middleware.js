const jwt = require('jsonwebtoken')
const blogModel = require("../Models/BlogModel");

const authentication = function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      return res.status(401).send({ status: false, msg: "token is required" });
    }
    jwt.verify(token, "project1-group2", (err, decoded) => {
      if (err) {
        return res.status(401).send({ status: false, msg: err.message })
      } else {
        req.decoded = decoded
        req.authorlog = req.decoded.authorId;
        return next();
      }
    });
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

const authorisation = async function (req, res, next) {
  try {
    let authorId2 = req.query.authorId;
    let authorLogin_ = req.decoded.authorId;
    let blogId = req.params.blogId
    if (blogId) {
      let blogs = await blogModel.findById(blogId);
      let authorId5 = blogs.authorId;
      if (authorId5 != req.authorlog) {
        return res.status(403).send({ status: false, msg: "you do n0t have access" });
      };
      return next()
    } else {
      if (authorId2 != authorLogin_) {
        return res
          .status(403)
          .send({ status: false, msg: "you do not have access" });
      } return next();

    }
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports={authentication,authorisation}




