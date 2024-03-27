import React, { useContext, useState } from 'react'
import '../App.css'
import {useNavigate} from 'react-router-dom'
import { Usecontext } from '../App'
const Login = () => {
  const {state,dispatch}=useContext(Usecontext)

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const loginuser=async (e)=>{
    e.preventDefault();
    const res=await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    const data=res.json();
    if(res.status===402||!data){
      window.alert("Invalid LogIn Credentials");
    }
    else{
      dispatch({type:'USER',payload:true})
      window.alert("Login Successfull");
      navigate('/');
    }
  }
  return (
    <div>
      <form className='myform' method='POST'>
        <div>
        <div className='form-title'><p>User Log-In Here:</p></div>
        <div className='mainform'>
            <p className='form-title-2'>Enter Your Email ID:</p><br/>
            <input type='mail' value={email} placeholder='Enter Your E-Mail' className='myinput' name='email' onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <p className='form-title-2'>Enter Password:</p><br/>
            <input type='password' value={password} placeholder='Enter Your Password' className='myinput' name='password' onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <button className='mybutton' onClick={loginuser}>Log-In</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Login
