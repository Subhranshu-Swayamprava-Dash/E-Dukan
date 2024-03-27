import React from 'react'
import Allproducts from '../images/Allproducts';
import Myitem from './Myitem';
import  '../App.css';
const Wfashion = () => {
  return (
    <div >
    <h2 className='newphone'>New in Women's Collection</h2>
    <div className='myphones'>
    {
      Allproducts.map((item,index)=>{
        return(
          <div >
             { item.catagory==="women"?<Myitem img={item.image} name={item.name} key={index} id={item.id}/>:<></>}
          </div>    
        )
      })
    }
    </div>
  </div>
  )
}

export default Wfashion
