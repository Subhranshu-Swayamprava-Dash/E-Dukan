import React from 'react'
import '../App.css';
import { Banner } from '../images/Mybanner';
import Allproducts from '../images/Allproducts';
import Myitem from './Myitem';
const Electronics = () => {
  return (
    <div>
        <h2 className='newphone'>New in Electronics Collection</h2>
        <div className='myphones'>
      {
        Allproducts.map((item,index)=>{
          return(
            <div >
               { item.catagory==="electronics"?<Myitem img={item.image} name={item.name} key={index} id={item.id}/>:<></>}
            </div>    
          )
        })
      }
      </div>
      <div className='Ebanner'>
        {
            Banner.map((item,index)=>{
                return(
                    <img className='bannerimg' src={item.image}></img>
                )
            })
        }
      </div>
      
    </div>
  )
}

export default Electronics
