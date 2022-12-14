import React, { useState } from "react";
import "../CSS/Store.css";
import Footer from "../Footer";

const Store = (props) => {

    return (
        <div>
        <div className="store"> 
            <div className="titlebanner">
                <div className="storetitle">PICK OUT YOUR FAVOURITE SINGLES</div>
                
            </div>
            <div className="imagebanner">
                <div className="imagecovershadow">
                    <h2 className="imagecovertitle">The Community's Favourite Singles At Affordable Prices</h2>
                    <div className="imagecoverpara">As one of the most popular trading card games, we know there are masses who want to get their hands on the full Yu-Gi-Oh collection. Or perhaps you're a collector trying to add memories of your childhood to your album. Well you've come to the right place, here you'll find the most popular and iconic singles, all at affordable prices!</div>
                </div>
            </div>

            {/* <div className="textbanner">
                <h2 className="imagecovertitle">The Community's Favourite Singles At Affordable Prices</h2>
                <div className="imagecoverpara">
                    As one of the most popular trading card games, we know there are masses who want to get their hands on the full Yu-Gi-Oh collection. Or perhaps you're a collector trying to add memories of your childhood to your album. Well you've come to the right place, here you'll find the most popular and iconic singles, all at affordable prices!
                </div>
            </div> */}

            <div className="itemgrid">
                <div className="actualitemgrid"> 
                {props.shoppingItems.map((item, i) => {
                    return(
                        <div className="card">
                            
                            <img className="cardimage" src={item.image} alt={"yugioh card " + item.name} onMouseOver={ (e) => {e.target.src=item.cover; }} onMouseLeave={ (e) => {e.target.src=item.image}}></img>

                            <div className="cardinfo"> 
                                <h6 className="cardtitle">{item.name}</h6>
                               
                               <div className="bottomcardinfo">
                                <p className="itemprice">${item.price}</p>
                                <div className="changevalue">
                                    <button className="increase" onClick={ () => {props.fakeIncrease(item, i)}}>+</button>

                                    <input type="number" onChange={ (e) => {props.fakeHandleChange(item, i, e)} } value={item.fakequantity}></input>
                                    <button className="decrease" onClick={ () => {props.fakeDecrease(item, i)}}>-</button>
                                </div>
                                <button className="addtocart" onClick={ () => {props.update(item)}}> ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                    )
                    })}
                </div>
            </div>
            
            </div>
            <Footer />
        </div> 
    )
}

export default Store;