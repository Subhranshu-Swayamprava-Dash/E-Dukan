import React from 'react'
import '../App.css';
import Allproducts from '../images/Allproducts';
import Myitem from './Myitem';
const Phones = () => {
  return (
    <div >
      <h2 className='newphone'>New in Phone's Collection</h2>
      <div className='myphones'>
      {
        Allproducts.map((item,index)=>{
          return(
            <div >
               { item.catagory==="phones"?<Myitem img={item.image} name={item.name} key={index} id={item.id}/>:<></>}
            </div>    
          )
        })
      }
      </div>
    </div>
  )
}

export default Phones
