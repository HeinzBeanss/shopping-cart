import React from "react";
import { Link } from "react-router-dom"
import "./CSS/Nav.css";
import CartIcon from "./assets/shopping-cart.svg";

const Nav  = (props) => {

    return (
        <div className="navbar"> 
            <Link to={"/"}><div className="navbarleft title"> WELCOME </div></Link>
            <div className="navbarright">
                <Link to={"/"}><div className="home"> HOME </div></Link>
                <Link to={"/store"}><div className="store"> STORE </div></Link>
                <div className="cartsection">
                    <Link to={"/cart"}><img className="cartsym cart" src={CartIcon} alt="cart icon"/></Link>
                    <Link to={"/cart"}><div className="cart">{props.cartCount}</div></Link>
                </div>
                    
            </div>
        </div>
    )
}

export default Nav;