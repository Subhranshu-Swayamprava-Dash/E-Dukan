const express=require('express');
const app=express();
const dotenv=require('dotenv');
const cors=require('cors');
const cookieParser = require("cookie-parser");
dotenv.config({path:'./config.env'});
app.use(cookieParser());
const port=process.env.port;
app.use(express.json());
app.use(cors());
require('./db/conn');
const User=require('./models/userSchema');
app.use(require('./router/auth'));

app.listen(port,()=>{
    console.log("Server is listening at port "+process.env.port);
})
