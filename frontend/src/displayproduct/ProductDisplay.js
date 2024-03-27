import React, { createContext, useContext, useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductDisplay = (props) => {
    const {product}=props;
    const [amount,setAmount]=useState(1);
    const {addToCart}=useContext(ShopContext);
  return (
    <div>
     
      <div className='myimg'>
        <img src={product.image} style={{width:'400px',height:'450px',margin:'5px',borderRadius:'10px'}} alt='unabletodownloadimage'></img>
        <div className='moredetails'>
            <h4 style={{color:'grey',marginBottom:'6px'}}>{product.brand}</h4>
            <h3 style={{marginBottom:'6px'}}>{product.name}</h3>
            <h5 style={{color:'green',marginBottom:'6px'}}>Special price</h5>
            <h1 style={{marginBottom:'6px'}}><i class="fa-solid fa-indian-rupee-sign"></i>{product.newprice}</h1><i class="fa-solid fa-indian-rupee-sign" style={{textDecoration:'line-through',color:'grey',marginBottom:'6px'}}>{product.oldprice}</i><h4 style={{color:'green'}}>{product.discount}% Off</h4>
            <span style={{width:'25px',height:'18px',borderRadius:'20px',background:'green',color:'white',padding:'3px',marginBottom:'6px'}}>{product.ratings}<i class="fa-solid fa-star" style={{color:'white'}}></i></span><h4 style={{marginBottom:'6px'}}>{product.peoplerating} ratings and {product.reviews} reviews</h4>
            {/* <div style={{width:'250px' }}><p>Size</p> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>M</button> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>L</button> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>XL</button> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>XLL</button></div> */}
           
            <h3 style={{marginBottom:'6px'}}>Available offers</h3>
            <ol style={{margin:'15px',fontSize:'18px',marginBottom:'6px'}}>
                <li style={{color:'green',fontWeight:'bold',marginBottom:'6px'}}>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
                <li  style={{color:'green',fontWeight:'bold',marginBottom:'6px'}}>Special PriceGet at flat ₹299T&C</li>
            </ol>
            <div style={{display:'flex',width:'600px',height:'30px',border:'1px solid black',padding:'2px',justifyContent:'space-between',textAlign:'center',marginBottom:'6px'}}>

     {/* <button onClick={()=>setAmount(amount-1)} style={{width:'25px',background:'rgb(60, 85, 250)',color:'white',cursor:'pointer'}}> <i class="fa-solid fa-minus"  style={{marginTop:'7px'}}></i></button>
      <p  style={{marginTop:'4px'}}>{amount}</p>
      <button onClick={()=>setAmount(amount+1)}s style={{width:'25px',background:'rgb(60, 85, 250)',color:'white',cursor:'pointer'}}><i class="fa-solid fa-plus"  style={{marginTop:'7px'}}></i></button> */}
      <p style={{margin:'3px',color:'red',fontWeight:'900'}}>Click Add To Cart As Much You Required To Add Given Product in Cart</p>

      </div>
        </div>
      </div>
      
      <div style={{display:'flex',width:'98%',height:'50px',justifyContent:'space-between'}}>
      <button style={{background:'orange',padding:'10px',borderRadius:'10px',width:'47%',textAlign:'center',height:'50px',cursor:'pointer',fontSize:'25px',color:'white'}} onClick={()=>{addToCart(product.id);window.alert("Added To Cart")}} >Add To Cart</button>
        <span style={{width:'3px',height:'100%'}}></span>
        <button style={{background:'orange',padding:'10px',borderRadius:'10px',width:'47%',textAlign:'center',height:'50px',cursor:'pointer',fontSize:'25px',color:'white'}}>Buy Now</button>
      </div>

    </div>
  )
}

export default ProductDisplay
