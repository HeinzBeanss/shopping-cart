import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./CSS/Nav.css";
// import CartIcon from "./assets/shopping-cart.svg";
import Cart from "../src/Components/Cart";

const Nav  = (props) => {
    const [test, setTest] = useState([]);


    const addCart = () => {
        console.log("UNDER THIS");
        console.log(props.cartShown);
        if (props.cartShown === true) {
        setTest(<Cart test={test} removeCart={removeCart} cartShown={props.cartShown} setCartShown={ () => { props.setCartShown(false)} } shoppingItems={props.shoppingItems} increase={props.increase} decrease={props.decrease} handleChange={props.handleChange} price={props.price}/>)
    } else {
        console.log("nope, dont show cart, it's false")
    }
}

    useEffect(() => {
        console.log("lancelot albion");
        addCart()

    },[...props.shoppingItems, props.cartShown, props.price]) //, props.cartShown
    // 

    const removeCart = () => {
        console.log("lancelot launch!");
        props.dontShowCart();
        setTest([]);
        console.log(props.test)
    }

  
    return (
        <div>
            <div className="cartcontainter">{test}</div>
        <div className="navigation"> 
            <div className="bannerpromo">GET AN EXTRA 10% OFF USING CODE <b onClick={ (e) => { navigator.clipboard.writeText(e.target.textContent)}}><u>YUGIOH22</u></b> AT CHECKOUT</div>
            <div className="navbar">
                <Link to={"/"}><div className="navbarleft title"> Yu-Gi-Oh Card Market </div></Link>
                <div className="navbarright">
                    <Link to={"/"}><div className="homebutton"> Home </div></Link>
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