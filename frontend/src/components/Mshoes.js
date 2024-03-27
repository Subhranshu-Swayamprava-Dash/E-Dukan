import React from 'react'
import '../App.css';
//import { Menshoes } from '../images/Mshoes';
import Allproducts from '../images/Allproducts';
import Myitem from './Myitem';

const Mshoes = () => {
  return (
    <div>
       <h2 className='newphone'>New in Men's Shoes Collection</h2>
    <div className='myphones'>
    {
      Allproducts.map((item,index)=>{
        return(
          <div >
             { item.catagory==="shoes"?<Myitem img={item.image} name={item.name} key={index} id={item.id}/>:<></>}
          </div>    
        )
      })
    }
    </div>
    </div>
    
  )
}

export default Mshoes
