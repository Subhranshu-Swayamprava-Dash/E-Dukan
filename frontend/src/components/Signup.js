import React ,{useState}from 'react'
import {useNavigate} from 'react-router-dom'
import '../App.css'
const Signup = () => {
  const navigate=useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const [address,setAddress]=useState("");
  const [confirmpass,setConfirmpass]=useState("");
const postData=async (e)=>{
e.preventDefault();
const response= await fetch('/register',{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,
    email,password,phone,address,confirmpassword:confirmpass
  })
})
const data=await response.json();
if(response.status===422||!data){
  window.alert("Email Already Exist, Try Another Email");
}
else if(response.status===402){
  window.alert("Confirm Password Doesn't Matched")
}
else{
  window.alert("Registration Successfull");
  navigate('/login');
}
}
  return (
    <div>
      <form  className='myform' method='POST'>
        <div>
        <div className='form-title'><p>New User Sign-Up Here:</p></div>
        <div className='mainform'>
           <p className='form-title-2'>Enter Your Name:</p><br/>
            <input type='text' placeholder='Enter Your Name' value={name} className='myinput' name='name' onChange={(e)=>setName(e.target.value)}></input><br/>
            <p className='form-title-2'>Enter Your Email ID:</p><br/>
            <input type='mail' placeholder='Enter Your E-Mail'  value={email} className='myinput' name='email' onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <p className='form-title-2'>Enter Password:</p><br/>
            <input type='password' placeholder='Enter Your Password' value={password} className='myinput' name='password'  onChange={(e)=>setPassword(e.target.value)}></input><br/>
            <p className='form-title-2'>Confirm Password:</p><br/>
            <input type='password' placeholder='Confirm Your Password'value={confirmpass} className='myinput' name='confirmpassword'  onChange={(e)=>setConfirmpass(e.target.value)}></input><br/>
            <p className='form-title-2'>Address</p><br/>
            <input type='text' placeholder='Enter Your Address' value={address} required className='myinput' name='address'  onChange={(e)=>setAddress(e.target.value)}></input><br/>
            <p className='form-title-2'>Phone no.</p><br/>
            <input type='text' placeholder='Enter Your Phone no.' value={phone} required className='myinput' name='phone'  onChange={(e)=>setPhone(e.target.value)}></input><br/>
            
            <button className='mybutton' onClick={postData}>Sign Up</button>
        </div>
        </div>
      </form>
    </div>
  )
}

export default Signup
