const blogModel = require('../Models/BlogModel')
const authorModel = require('../Models/AuthorModel')
//const {isValidObjectId} = require ('mongoose')

const createblog = async function (req, res) {
    try {
        let data = req.body
        let Id = data.authorId
        if (Object.keys(data).length === 0) return res.status(400).send({ status: false, msg: "data is mandatory" })
        let id = await authorModel.findById(Id)
        if (!id) return res.status(404).send({ status: false, msg: "Invalid AuthorId" })
        const Authordata = await blogModel.create(data)
        return res.status(201).send({ status: true, data: Authordata })
    }
    catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}
module.exports.createblog = createblog