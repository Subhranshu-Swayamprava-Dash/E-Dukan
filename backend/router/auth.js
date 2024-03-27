const express=require('express');
const router=express.Router();
const cookie = require('cookie');
require('../db/conn');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/userSchema')
const authenticate=require('../middleware/authenticate')
router.post('/register',async (req,res)=>{
const {name,email,password,confirmpassword,address,phone}=req.body;
if(!name||!email||!password||!confirmpassword||!address||!phone){
    return res.status(422).json({error:"Please fill up all details"})
   
}
const exist=await User.findOne({email});
if(exist){
   return res.status(422).json({error:"Email already registered"});
    
}
else if(password!=confirmpassword){
    
    return res.status(402).json({error:"Password is not matching"})
}
const user= new User({
    name,email,password,confirmpassword,address,phone
});
//hashing

const saving=await user.save();
if(saving){
    return res.status(201).json({message:"User Registration Successfull"});
}
else{
   return res.status(402).json({error:"User Registration Unsuccessfull"});
}
});
//login
router.post('/login',async(req,res)=>{
try{
const {email,password}=req.body;
if(!email||!password){
    
    return res.status(402).json({error:"Please Fill The Data"})
}
const userLogin=await User.findOne({email:email});
if(userLogin){
    const isMatch=await bcrypt.compare(password,userLogin.password);
    const token=await userLogin.generateAuthToken();
    res.cookie("jwtoken",token,
        { httpOnly: true, secure: true, maxAge:24 * 60 * 60 * 1000 }
    );
    // const token=await userLogin.generateAuthToken();
    // res.cookie("jwtoken",token,
    //     { httpOnly: true, secure: true, maxAge:  24 * 60 * 60 * 1000 }
    // );
    // res.cookie('jwtoken', token, {
    //     secure: true, // Set to true if using HTTPS
    //     httpOnly: true,
    //     sameSite: 'strict', // Adjust to your requirements
    //     maxAge: 7 * 24 * 60 * 60 * 1000, // Set the expiration time (7 days in this example)
    //   });
if(!isMatch){
    return res.status(402).json({error:"Invalid Login Credentials"})
}
else{
       return res.status(200).json({message:"Login Successfull"})
}
}
else{
   return res.status(402).json({erroe:"User Not Found"});
}
// if(userLogin){
//     const isMatch=await bcrypt.compare(password,userLogin.password);
//     const token=await jwt.sign({_id:userLogin._id},process.env.SECRET_KEY,{expiresIn:'7d'});

// if(!isMatch){
//     return res.status(400).json({error:"Invalid Login Credentials"})
// }
// else{
//         res.status(200).json({message:"Login Successfull",usertoken:token});
// }
// }
}catch(e){
    console.log(e);
}
})
//cart
router.get("/cart",authenticate,(req,res)=>{
try {
    res.status(200).send({
        message:"Verified"
    })
    console.log("User Verified");
} catch (error) {
    res.status(401).send({
        error:"Error in Authorization"
    })
}
// res.send("User verified");
// console.log("user verified");
})
router.get("/userinfo",authenticate,(req,res)=>{
    try {
        res.status(200).send({
            message:"Verified"
        })
        console.log("User Verified");
    } catch (error) {
        res.status(401).send({
            error:"Error in Authorization"
        })
    }
    // res.send("User verified");
    // console.log("user verified");
    })
router.get("/logout",(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send({
        message:"Logout"
    })
    console.log("User Logout");
    })
module.exports=router