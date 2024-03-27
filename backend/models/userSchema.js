const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]

},{timestamps:true})
userSchema.pre('save',async function (next) {
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,12);
        this.confirmpassword=await bcrypt.hash(this.confirmpassword,12);
    }
    next();
})
userSchema.methods.generateAuthToken=async function(){
    try{
        let mytoken=jwt.sign({_id:this._id},process.env.SECRET_KEY);
        this.tokens=this.tokens.concat({token:mytoken});
        await this.save();
        console.log(mytoken);
        return mytoken;
    }
    catch(e){
        console.log(e);
    }
}
const User=mongoose.model('Users',userSchema);
module.exports=User;