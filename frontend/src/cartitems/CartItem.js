import React, { useContext } from "react";
//import Allproducts from '../images/Allproducts'
import { ShopContext } from "../context/ShopContext";

import "./CartItem.css";
const CartItem = () => {
  const { Allproducts, cartItems, addToCart, removeFromCart, getTotalCart } =
    useContext(ShopContext);
  return (
    <div className="container">
      <div className="heading">
        <p>Products</p>
        <p>Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {Allproducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="myproducts heading">
                <img src={e.image} alt=""></img>
                <p>{e.name}</p>
                <p>₹{e.newprice}</p>
                <button>{cartItems[e.id]}</button>
                <p>₹{e.newprice * cartItems[e.id]}</p>
                <i
                  class="fa-solid fa-xmark"
                  style={{
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    color: "white",
                    fontWeight: "bold",
                    background: "red",
                    textAlign: "center",
                    paddingTop: "2px",
                    fontSize: "19px",
                  }}
                  onClick={() => removeFromCart(e.id)}
                ></i>
              </div>
              <hr />
            </div>
          );
        }
      })}
      <div className="down-container">
        <div className="downheading">
          <h2>Total Cost</h2>
          <p>₹{getTotalCart()}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
