import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./CSS/Nav.css";
// import CartIcon from "./assets/shopping-cart.svg";
import Cart from "../src/Components/Cart";

const Nav  = (props) => {
    const [test, setTest] = useState([]);


    const addCart = () => {
        if (props.cartShown === true) {
        setTest(<Cart test={test} removeCart={removeCart} cartShown={props.cartShown} setCartShown={ () => { props.setCartShown(false)} } shoppingItems={props.shoppingItems} increase={props.increase} decrease={props.decrease} handleChange={props.handleChange} price={props.price}/>)
    } else {

    }
}

    useEffect(() => {
        addCart()

    },[...props.shoppingItems, props.cartShown, props.price]) //, props.cartShown
    // 

    const removeCart = () => {
        props.dontShowCart();
        setTest([]);
    }

  
    return (
        <div>
            <div className="cartcontainter">{test}</div>
        <div className="navigation"> 
            <div className="bannerpromo">GET AN EXTRA 10% OFF USING CODE <b onClick={ (e) => { navigator.clipboard.writeText(e.target.textContent)}}><u>YUGIOH22</u></b> AT CHECKOUT</div>
            <div className="navbar">
                <Link to={"//shopping-cart"}><div className="navbarleft title"> Yu-Gi-Oh Card Market </div></Link>
                <div className="navbarright">
                    <Link to={"/shopping-cart"}><div className="homebutton"> Home </div></Link>
                    <Link to={"/store"}><div className="storebutton"> Store </div></Link>
                    <div className="cartbutton">
                        {/* <img className="cartsym cart" src={CartIcon} alt="cart icon"/> for cart icon */}
                        <div className="cartsym cart" onClick={props.pleaseShowCart}>Cart</div>
                        <div className="cart">({props.cartCount})</div>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    )
}

export default Nav;