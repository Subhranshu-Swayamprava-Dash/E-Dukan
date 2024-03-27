const jwt=require('jsonwebtoken');
const User=require('../models/userSchema');
const authenticate=async(req,res,next)=>{
try{
const token = req.cookies.jwtoken;
const verifyToken= jwt.verify(token,process.env.SECRET_KEY);
const rootUser=await User.findOne({_id:verifyToken._id,"tokens.token":token});
if(!rootUser){
    throw new Error('User Not Found');
}
// req.token=token;
// req.rootUser=rootUser;
// req.userID=rootUser._id;
// console.log(rootUser.name);
// console.log(rootUser._id);
console.log(rootUser);
  next();
}catch(e){
    res.status(401).send("Unauthorized User");
    console.log(e);
}
}
// const authenticate=async(req,res,next)=>{
//    try {
//     const decode=jwt.verify(req.headers.authorization,process.env.SECRET_KEY);
//     req.user=decode;
//     next();
//    } catch (error) {
//     console.log(error);
//     res.status(400).send({error:"Error in authenticaate"})
//    }
// }
module.exports=authenticate;