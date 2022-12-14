import React from "react";
import "../CSS/Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {

    return props.cartShown ? 
    <div className="cartsection"> 
        <Link to="/store"><button className="exitcart" onClick={props.setCartShown}>X</button></Link>

        <h1>Cart Summary</h1>

        <div className="itemSummary">
            {props.shoppingItems.map((item, i) => {
                    if (item.quantity > 0) {
                        return (
                            <div key={i}>
                                <p>{item.name}</p>
                                <img src={item.image} alt={"yugioh card " + item.name}></img>
                                <div>
                                    <button className="increase" onClick={ () => {props.increase(item, i)}}>+</button>

                                    <input type="number" onChange={ (e) => { props.handleChange(item, i, e)}} value={item.quantity}></input>
                                    <button className="decrease" onClick={ () => {props.decrease(item, i)}}>-</button>
                                </div>
                                
                            </div>
                        )
                    }
            })}
        </div>
        <div className="price">
            <h2>Cart Total: ${props.price}</h2>
            <button>Checkout</button>
        </div>
        

    </div>
    :
    <div></div>
}

export default Cart;