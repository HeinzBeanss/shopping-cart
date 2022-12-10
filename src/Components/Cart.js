import React from "react";
import "../CSS/Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
    console.log(props.setCartShown)


    return props.cartShown ? 
    <div className="cartsection"> 
        <Link to="/store"><button className="exitcart" onClick={props.setCartShown}>X</button></Link>
    </div>
    :
    <div></div>
}

export default Cart;