const express = require("express")



const router = express.Router()

router.get("/users",(req,res)=>{
    res.status(200).json({
        message: "router working"
    })
})


module.exports = router