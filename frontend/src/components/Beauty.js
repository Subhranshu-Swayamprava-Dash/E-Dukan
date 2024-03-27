import React from 'react'
import '../App.css'
import Allproducts from '../images/Allproducts'
import Myitem from './Myitem'
const Beauty = () => {
  return (
    <div>
       <h2 className='newphone'>New in Beauty Collection</h2>
      <div className='myphones'>
      {
        Allproducts.map((item,index)=>{
          return(
            <div >
               { item.catagory==="beauty"?<Myitem img={item.image} name={item.name} key={index} id={item.id}/>:<></>}
            </div>    
          )
        })
      }
      </div>
    </div>
  )
}

export default Beauty
