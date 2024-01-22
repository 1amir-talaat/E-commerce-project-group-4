import React from "react";
import "./Emptycart.css";

import MyImage from '../Cart/empty-cart-2130356-1800917.png';
import { Link } from "react-router-dom";
function Emptycart(){
  return(
    <div className="emptycart">
      <div className="cart-content d-flex justify-content-center align-items-center">
        <div className="image">
          <img src={MyImage} alt="" />
        </div>
        <div className="cart-text-1">
          <h3>Your cart is empty</h3>
          <p>Looks like you haven't made your choice yet </p>
          <Link to={'/Products'} className="shopping">Shopping Now</Link>
        </div>
    </div>
    </div>
  )
}


export default Emptycart;
