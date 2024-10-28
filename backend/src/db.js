const mongoose = require("mongoose")


exports.connectDB= async()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/AI_chatbot');
        console.log("Database connected");
        
    } catch (error) {
        console.log("error connecting Database");
        
    }
}