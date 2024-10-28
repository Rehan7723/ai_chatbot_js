const mongoose = require("mongoose")


const chatSchema = new mongoose.Schema({
    role:{
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    }
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    chats: [chatSchema]
})

module.exports= mongoose.model("users",userSchema)