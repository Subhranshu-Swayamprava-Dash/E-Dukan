import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
const Myitem = (props) => {
  return (
    <div>
       <div  className='insidephone' >
        
          <Link to={`/product/${props.id}`}>    <img src={props.img} alt='phoneimg' className='phoneimage' /></Link> 
               <p className='model'>{props.name}</p>
               </div> 
    </div>
  )
}

export default Myitem
