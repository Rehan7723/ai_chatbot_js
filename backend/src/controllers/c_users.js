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


exports.addUser = async(req,res,next)=>{
    try {
        const newUser= new user_model({
            name: req.params.name,
            email: req.params.email,
            password: req.params.password
        })
        const adduser= await newUser.save()

        res.status(202).json({
            message: "user added",
            adduser
        })
    } catch (error) {
        console.log(error);

        res.status(400).json({
            message: error
        })
    }
}
