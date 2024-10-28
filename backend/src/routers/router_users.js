const express = require("express")
const {getAllusers} = require("../controllers/c_users")

const router = express.Router()


router.use("/",getAllusers)


module.exports= router
