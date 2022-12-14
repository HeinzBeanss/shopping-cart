import React, { useState } from "react";
import "../CSS/Store.css";
const Store = (props) => {

    return (
        <div className="store"> 
            <div className="storetitle">PICK OUT YOUR FAVOURITE SINGLES.</div>
            <div className="itemgrid">
                {props.shoppingItems.map((item, i) => {
                    return(
                        <div>
                            <p>{item.name}</p>
                            <img src={item.image} alt={"yugioh card " + item.name} onMouseOver={ (e) => {e.target.src=item.cover}} onMouseLeave={ (e) => {e.target.src=item.image}}></img>
                            <p>{item.price}</p>
                            
                            <button className="increase" onClick={ () => {props.fakeIncrease(item, i)}}>+</button>

                            <input type="number" onChange={ (e) => {props.fakeHandleChange(item, i, e)} } value={item.fakequantity}></input>
                            <button className="decrease" onClick={ () => {props.fakeDecrease(item, i)}}>-</button>
                            <button onClick={ () => {props.update(item)}}> Add to cart</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Store;