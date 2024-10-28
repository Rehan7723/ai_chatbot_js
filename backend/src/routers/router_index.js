const express = require("express")
const user_router = require("./router_users")



const router = express.Router()

router.use("/users",user_router)//  :api/users/


module.exports = router