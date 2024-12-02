const express = require('express');
const router = express.Router();
const user_model = require('../models/user')

router.post("/signup" , async(req , res) => {
    const {username , email , password , role} = req.body;

    if (!username || !email || !password || !role) {
        return res.status(400).json({ error: "Please fill all the required fields." });
    }

    try {
        const existingUser = await usermodel.findOne({ $or: [{ username }, { email }] });

        if (existingUser) {
            // If the username or email already exists, return a 401 response with a message
            return res.status(401).json({ error: "Username or email already exists." });
        }

        await user_model.create({
            username,
            email,
            password,
            role
        })

        return res.status(200).json({message: "signed up successfully"});
    } catch (error) {
        console.error(error);
        return res.status(500).json({message: "please try again later"})
    }
});

router.route("/login").post(async(req,res) => {
    const {email , password} = req.body;
    if(!email || !password) {
        return res.status(400).json({ error: "Please fill all the required fields." });
    }
    
    try {
        const user = await usermodel.findOne({email});
        if(!user){
            return res.status(401).json({ error:"Invalid Credentials." });
        }
        
        const ispasswordvalid = await user.isCorrectPassword(password);
        if(!ispasswordvalid){
            return res.status(401).json({ error: "Invalid Credentials." });
        }
        
        const accesstoken = await user.generateAccessToken();
        const refreshtoken = await user.generateRefreshToken();
        user.refreshtoken = refreshtoken;

        await user.save({ validateBeforeSave: false });

        const options = {
            httpOnly:true,
            secure:true
        }
        
        return res.status(200).cookie("accesstoken" , accesstoken , options).cookie("refreshtoken" , refreshtoken , options).json({ message: "Login successful" });
    } 
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: "An error occurred during login. Please try again later." });
    }
});

module.exports = router;