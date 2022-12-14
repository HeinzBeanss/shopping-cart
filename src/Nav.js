import React, { useEffect } from "react";
import { Link } from "react-router-dom"
import "./CSS/Nav.css";
// import CartIcon from "./assets/shopping-cart.svg";

const Nav  = (props) => {
  
    return (
        <div className="navigation"> 
            <div className="bannerpromo">GET AN EXTRA 10% OFF USING CODE <b onClick={ (e) => { navigator.clipboard.writeText(e.target.textContent)}}><u>YUGIOH22</u></b> AT CHECKOUT</div>
            <div className="navbar">
                <Link to={"/"}><div className="navbarleft title"> Yu-Gi-Oh Card Market </div></Link>
                <div className="navbarright">
                    <Link to={"/"}><div className="homebutton"> Home </div></Link>
                    <Link to={"/store"}><div className="storebutton"> Store </div></Link>
                    <div className="cartbutton" onClick={props.setCartShown}>
                        {/* <img className="cartsym cart" src={CartIcon} alt="cart icon"/> for cart icon */}
                        <Link to={"/cart"}><div className="cartsym cart">Cart</div></Link>
                        <Link to={"/cart"}><div className="cart">({props.cartCount})</div></Link>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Nav;