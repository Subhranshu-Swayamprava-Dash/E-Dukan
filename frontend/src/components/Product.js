import React, { useContext } from 'react'
 import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../displayproduct/ProductDisplay';
//import Allproducts from '../images/Allproducts';
const Product = () => {
    const {Allproducts}=useContext(ShopContext);
    const {productId}=useParams();
    const product=Allproducts.find((e)=>e.id===Number(productId))
  return (
    <div>
     <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
