const express = require("express")
const {getAllusers,
       addUser
} = require("../controllers/c_users")

const user_router = express.Router()


user_router.get("/",getAllusers)
user_router.post("/:name/:email/:password",addUser)


module.exports= user_router
