import React, { useEffect } from 'react'
//import {Menscomp} from '../images/Menscomp';
import Allproducts from '../images/Allproducts';
import '../App.css';
import Myitem from './Myitem';
const Fashion = () => {
  return (
    <div >
      <h2 className='newphone'>New in Men's Collection</h2>
      <div className='myphones'>
      {
        Allproducts.map((item,index)=>{
          return(
            <div >
               { item.catagory==="mens"?<Myitem img={item.image} name={item.name} key={index} id={item.id}/>:<></>}
            </div>    
          )
        })
      }
      </div>
    </div>
  )
}

export default Fashion
