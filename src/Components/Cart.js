import React from "react";
import "../CSS/Cart.css";
import { Link } from "react-router-dom";

const Cart = (props) => {

    return (
        <div className="cartsection"> 
            <div className="carttitlesection">
                <Link to="/store"><button className="exitcart" onClick={props.removeCart}>X</button></Link>
                <h1 className="carttitle">CART SUMMARY</h1>
            </div>

            <div className="itemSummary">
            {props.shoppingItems.map((item, i) => {
                    if (item.quantity > 0) {
                        return (
                            <div className="item" key={i}>
                                
                                <img className="cartimage" src={item.image} alt={"yugioh card " + item.name}></img>
                                
                                <div class="itemceptimage">
                                    <div className="nameandqnt">
                                        <p className="cartcardtitle">{item.name}</p>
                                        <p className="rarity">{item.rarity}</p>
                                        <div className="quantity">
                                            <button className="cartincrease" onClick={ () => {props.increase(item, i)}}>+</button>
                                            <input className="cartinput" type="number" onChange={ (e) => { props.handleChange(item, i, e)}} value={item.quantity}></input>
                                            <button role="contentinfo" className="cartdecrease" onClick={ () => {props.decrease(item, i)}}>-</button>
                                        </div>
                                    </div>
                                    <div className="cartprice">
                                        <div className="singlecardprice"><i>${item.price} * {item.quantity}</i></div>
                                        <div>${(Math.round(item.price * item.quantity * 100) / 100).toFixed(2)}</div>

                                        </div>
                                </div>
                            </div>
                        )
                    }
            })}
        </div>
        <div className="price">
            <h2>Cart Total: ${(Math.round(props.price * 100) / 100).toFixed(2)}</h2>
            <button className="checkout">Checkout</button>
        </div>
    </div>
    )
}

export default Cart;