import React from 'react'
import '../App.css'
import hoodies from '../images/hoodies.jpg';
const Productdetails = () => {
  return (
    <div>
      <div className='myimg'>
        <img src={hoodies} style={{width:'400px',height:'450px',margin:'5px',borderRadius:'10px'}} alt='unabletodownloadimage'></img>
        <div className='moredetails'>
            <h4 style={{color:'grey'}}>Soorhi</h4>
            <h3>Men Regular Fit Checkered Spread Collar Casual Shirt</h3>
            <h5 style={{color:'green'}}>Special price</h5>
            <h1><i class="fa-solid fa-indian-rupee-sign"></i>299</h1><i class="fa-solid fa-indian-rupee-sign" style={{textDecoration:'line-through',color:'grey'}}>1999</i><h4 style={{color:'green'}}>85% Off</h4>
            <span style={{width:'25px',height:'18px',borderRadius:'20px',background:'green',color:'white',padding:'3px'}}>4.2<i class="fa-solid fa-star" style={{color:'white'}}></i></span><h4>7,210 ratings and 376 reviews</h4>
            <div style={{width:'250px' }}><p>Size</p> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>M</button> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>L</button> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>XL</button> <button style={{margin:'2px', fontSize:'20px',fontWeight:'bolder'}}>XLL</button></div>
            <p>Specification</p> <h4>Fits:Regular|Size:XL</h4>
            <h3>Available offers</h3>
            <ol style={{margin:'15px',fontSize:'18px'}}>
                <li style={{color:'green',fontWeight:'bold'}}>Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</li>
                <li  style={{color:'green',fontWeight:'bold'}}>Special PriceGet at flat ₹299T&C</li>
            </ol>
        </div>
      </div>
      <div style={{display:'flex',width:'98%',height:'50px',justifyContent:'space-between'}}>
        <button style={{background:'orange',padding:'10px',borderRadius:'10px',width:'47%',textAlign:'center',height:'50px',marginLeft:'30px',cursor:'pointer',fontSize:'25px',color:'white'}}>Add To Cart</button>
        <span style={{width:'3px',height:'100%'}}></span>
        <button style={{background:'orange',padding:'10px',borderRadius:'10px',width:'47%',textAlign:'center',height:'50px',cursor:'pointer',fontSize:'25px',color:'white'}}>Buy Now</button>
      </div>
    </div>
  )
}

export default Productdetails
