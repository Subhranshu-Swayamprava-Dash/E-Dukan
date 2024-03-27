import React, { createContext, useContext, useState } from 'react'
import Allproducts from '../images/Allproducts';

export const ShopContext = createContext(null);
    const getDefaultCart=()=>{
        let cart={};
        for(let i=0;i<Allproducts.length+1;i++){
            cart[i]=0
        }
        return cart;
    }

const ShopContextProvider=(props)=>{
    const [cartItems,setcartItems]=useState(getDefaultCart())
   
    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
    }
    const getTotalCart=()=>{
        let tm=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let info=Allproducts.find((product)=>product.id===(item))
                tm+=(info.newprice)*cartItems[item];
                
            }
            return tm;
        }
    }
    const totalCartItem=()=>{
        let c=0;
        for(const item in cartItems){
            if(cartItems[item]>0) c++;
        }
        return c;
    }
    const contextValue={Allproducts,cartItems,addToCart,removeFromCart,getTotalCart,totalCartItem};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;
  

