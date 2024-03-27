import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Usecontext } from '../App'
const Logout = () => {
    const {state,dispatch}=useContext(Usecontext);

    const navigate=useNavigate();
    useEffect(()=>{

    fetch('/logout',{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"})
        .then((res)=>{
            dispatch({type:"USER",payload:false})
            navigate('/login',{replace:true});
            if(res.status!==200){
                const error=new Error(res.error);
                throw error;
            }
                   }).catch((e)=>{
                    console.log(e);
                   })
    })
  return (
   <div>
    <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"blue"}}>You are Loged Out</h1>
   </div>
  )
}

export default Logout
