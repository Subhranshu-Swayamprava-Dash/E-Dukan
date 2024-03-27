import React, { useEffect, useState } from 'react'
import '../App.css'
import shirt from '../images/fullshirt.webp'
import { useNavigate } from 'react-router-dom'
import CartItem from '../cartitems/CartItem'
const Cart = () => {
  const navigate=useNavigate();
 
  const callCart=async()=>{
    try{
      const res=await fetch('/cart',{
        method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          
        },
        credentials:"include"
      })

      const data=await res.json();
      
      console.log(data);
      if(res.status!==200){
        const error=new Error(res.error);
        throw error;
      }
    }catch(e){
      console.log(e);
      navigate('/login');
    }
  }
  useEffect(()=>{
    callCart();
  },[])
  return (
    <div className='mycart'>
      <form method='GET'>
      {/* <div className='left'>
    <img src={shirt} className='cartimage'></img>
    <div className='cart-description'>
    <h3 >Glito Full Sleeve Solid Shirt</h3>
    <p style={{color:'grey',fontSize:'18px', margin:'5px'}}>Size: XL</p>
    <p style={{color:'grey',fontSize:'16px', margin:'5px'}}>Seller: Glito</p>
    <p style={{color:'grey',fontSize:'16px', margin:'5px', float:'left',textDecoration:'line-through'}}><i class="fa-solid fa-indian-rupee-sign"></i> 1,399</p>
    <h4> 412 <p style={{color:'green'}}>70% Off 1 offer available</p></h4>
    <h3 style={{margin:'10px',marginLeft:'90%',cursor:'pointer'}}>Remove</h3>
    </div>
      </div>
      <div className='right'>
        <h3>Price Details</h3>
        <hr/>
        <h4 style={{float:'left', marginRight:'50px'}}>Price(2 items) <h4>&#8377 3,397</h4></h4>
        <h4 style={{float:'left', marginRight:'50px'}}>Delivery Charges <p>&#8377 80</p></h4>
        <hr/>
        <h3 style={{float:'left', marginRight:'50px'}}>Total Amount <h3><i class="fa-solid fa-indian-rupee-sign"></i> 412</h3></h3>
        <button style={{fontSize:'20px',backgroundColor:'orange', width:'200px',height:'60px',borderRadius:'10px', color:'white',padding:'10px',marginTop:'50%',cursor:'pointer'}}>Place Order</button>
      </div> */}
      
      <CartItem/>
      </form>
      
    </div>
    
  )
}

export default Cart
