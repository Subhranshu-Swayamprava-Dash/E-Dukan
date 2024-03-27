const mongoose=require('mongoose');
mongoose.connect(process.env.DB).then(()=>{
    console.log("Connected with Database");
}).catch((e)=>{
    console.log('Not coonected with database');
})