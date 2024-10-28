const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const connectDB = require("./db")
const router = require("./routers/router_index")




dotenv.config()
connectDB.connectDB()

const app=express()



app.use(morgan("dev"))
app.use(express.json())


app.use("/api",router)




app.all("*",(req,res)=>{
    res.status(404).json({
        message: "API not found",
        status: "not success"
    })
})



const port= process.config.PORT 

app.listen(5000,()=>{
    console.log("Server active");
    
})