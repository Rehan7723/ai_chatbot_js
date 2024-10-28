const user_model = require("../models/user_model")

 exports.getAllusers = async(req,res,next)=>{
    try {
        const users = await user_model.find()

        res.status(200).json({
            message:"ok",
            users
        })
    } catch (error) {
        console.log(error);

        res.status(400).json({
            message: error
        })
        
    }
}

