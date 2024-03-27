import React from 'react'
import Allproducts from '../images/Allproducts'
import Myitem from './Myitem'
const Womenshoes = () => {
  return (
    <div>
      <h2 className='newphone'>New in Women's Shoes Collection</h2>
    <div className='myphones'>
    {
     Allproducts.map((item,index)=>{
      return(
        <div >
           { item.catagory==="womenshoes"?<Myitem img={item.image} name={item.name} key={index} id={item.id}/>:<></>}
        </div>    
      )
    })
    }
    </div>
    </div>
  )
}

export default Womenshoes
