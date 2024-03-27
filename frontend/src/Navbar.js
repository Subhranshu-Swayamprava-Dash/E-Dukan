import React, { useState } from 'react'
import './App.css';
import { Link } from 'react-router-dom';
import { Usecontext } from './App';
import { useContext } from 'react';
import { ShopContext } from './context/ShopContext';
const Navbar = () => {
  const [menu,setmenu]=useState('')
  const {state,dispatch}=useContext(Usecontext);
  const {Allproducts,cartItems,removeFromCart,getTotalCart,totalCartItem}=useContext(ShopContext);
  const RenderMenu=()=>{
if(state){
  return (
    <>
    <div className='user'>
        <Link style={{textDecoration:'none', color:'white'}} to={"/user"} onClick={()=>{setmenu('user')}}>User{menu==='user'?<hr style={{border:'none',width:'80%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link>
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <div className='user'>
        
        <Link style={{textDecoration:'none', color:'white'}} to={"/mycart"} onClick={()=>{setmenu('cart')}}>Cart{menu==='cart'?<hr style={{border:'none',width:'100%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link>
        <Link style={{textDecoration:'none', color:'white'}} to={"/mycart"}><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
        <div className='nav-cart-count'>{totalCartItem()}</div>

      </div>
      <div className='user'>
       <Link style={{textDecoration:'none', color:'white'}} to={"/logout"} onClick={()=>{setmenu('logout')}}>Log-Out{menu==='logout'?<hr style={{border:'none',width:'100%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link> 
      </div>
      <div className='user'>
       <Link  style={{textDecoration:'none', color:'white'}} to={"/signup"} onClick={()=>{setmenu('signup')}}>Sign-Up{menu==='signup'?<hr style={{border:'none',width:'100%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link>
      </div>
    </>
  )
}
else{
  return (
    <>
    
    <div className='user'>
        <Link style={{textDecoration:'none', color:'white'}} to={"/user"} onClick={()=>{setmenu('user')}}>User{menu==='user'?<hr style={{border:'none',width:'100%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link>
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <div className='user'>
        
        <Link style={{textDecoration:'none', color:'white'}} to={"/mycart"} onClick={()=>{setmenu('cart')}}>Cart{menu==='cart'?<hr style={{border:'none',width:'100%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link>
        <Link style={{textDecoration:'none', color:'white'}} to={"/mycart"}><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
        <div className='nav-cart-count'>{totalCartItem()}</div>

      </div>
      <div className='user'>
       <Link style={{textDecoration:'none', color:'white'}} to={"/login"} onClick={()=>{setmenu('login')}}>Log-In{menu==='login'?<hr style={{border:'none',width:'100%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link> 
      </div>
      <div className='user'>
       <Link  style={{textDecoration:'none', color:'white'}} to={"/signup"} onClick={()=>{setmenu('signup')}}>Sign-Up{menu==='signup'?<hr style={{border:'none',width:'100%',height:'3px',borderRadius:'10px',background:'red'}}/>:<></>}</Link>
      </div>
    </>
  )
}
  }
  return (
    <div className='mynav' style={{display:'flex',justifyContent:'space-between'}}>
        <div className='kart'>
        <Link style={{textDecoration:'none',marginLeft:'30px'}} to={"/"}><p onClick={()=>setmenu('')}>E-Dukan</p></Link>
      <i class="fa fa-shopping-bag" aria-hidden="true"></i>
        </div>
      <div className='mysearch'>
      </div>
      {/* <div className='user'>
        <Link style={{textDecoration:'none', color:'white'}} to={"/productdetails"}>User</Link>
        <i class="fa fa-user" aria-hidden="true"></i>
      </div>
      <div className='user'>
        
        <Link style={{textDecoration:'none', color:'white'}} to={"/mycart"}>Cart</Link>
        <Link style={{textDecoration:'none', color:'white'}} to={"/mycart"}><i class="fa fa-shopping-cart" aria-hidden="true"></i></Link>
        <div className='nav-cart-count'>0</div>

      </div>
      <div className='user'>
       <Link style={{textDecoration:'none', color:'white'}} to={"/login"}>Log-In</Link> 
      </div>
      <div className='user'>
       <Link  style={{textDecoration:'none', color:'white'}} to={"/signup"}>Sign-Up</Link>
      </div> */}
      <div style={{display:'flex',marginRight:'30px'}}><RenderMenu/></div>
      
    </div>
  )
}

export default Navbar
