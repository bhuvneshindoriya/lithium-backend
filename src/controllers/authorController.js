const authorModel = require("../Models/AuthorModel")
const blogModel = require("../Models/BlogModel")
const { isValidEmail, isValidString, isValidPassword, isValidTitle } = require("../validator/validator");

const createAuthor = async function (req, res) {
    try {
        const data = req.body;
        let { fname, lname, title, email, password } = data
        if (!fname && !lname && !title && !password && !email) return res.status(404).send({ status: false, message: "All is mandotary" })

        if (!fname) return res.status(400).send({ status: false, msg: "fname is required" })
        if (!lname) return res.status(400).send({ status: false, msg: "lname is required" })
        if (!title) return res.status(400).send({ status: false, msg: "title is required" })
        if (!email) return res.status(400).send({ status: false, msg: "email is required" })
        if (!password) return res.status(400).send({ status: false, msg: "password is required" })

        if (!isValidString(fname)) return res.status(400).send({ status: false, msg: "Invalid fname" })
        if (!isValidString(lname)) res.status(400).send({ status: false, msg: "Invalid lname" })
        if (!isValidEmail(email)) return res.status(400).send({ status: false, msg: "Invalid E-MAIlID" })
        if (!isValidPassword(password)) return res.status(400).send({ status: false, msg: "Invalid password" })
        if (!isValidTitle(title)) return res.status(400).send({ status: false, msg: "invalid title-[Mr, Mrs, Miss]" })

        let authorValidEmail = await authorModel.findOne({ email: email })
        if (authorValidEmail) return res.status(404).send({ status: true, msg: "This email is already registered" })

        let authorcreate = await authorModel.create(data)
        res.status(201).send({ status: true, data: authorcreate })
    } catch (error) {
        res.status(500).send({ status: false, message: error.message })
    }
}

const login = async function (req, res) {
    try {
        let data = req.body
        let { email, password } = data

        if (Object.keys(data) == 0) return res.status(400).send({ status: false, msg: "Data is manditory" })
        if (!isValidEmail(email)) return res.status(400).send({ status: false, msg: "Please enter valid emailId" })


        let x = await authorModel.findOne({ email: email })

        if (x.email !== email) return res.status(400).send({ status: false, msg: "email is not registered" })
        if (!isValidPassword(password)) return res.status(400).send({ status: false, msg: "please enter valid password" })

        let savedata = await authorModel.findOne({ email: email, password: password })

        let token = jwt.sign({ authorId: savedata._id }, "project1-group2")
        res.header("x-api-key", token)
        res.status(200).send({ status: true, data: token })
    }

    catch (err) {
        res.status(500).send({ status: false, msg: err.message })
    }
}
module.exports={createAuthor,login}