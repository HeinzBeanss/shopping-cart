import React, { useState } from "react";

const Store = (props) => {

    const [shoppingItems, setShoppingItems] = useState(
        [
            {
                name: "Banana",
                price: 0.20,
                quantity: 0,
                image: "fakeimageurlimportedsoon",
            },

            {
                name: "Television",
                price: 350,
                quantity: 0,
                image: "fakeimageurlimportedsoon",
            },

            {
                name: "Chessboard",
                price: 8,
                quantity: 0,
                image: "fakeimageurlimportedsoon",
            },

            {
                name: "Candle Set",
                price: 21,
                quantity: 0,
                image: "fakeimageurlimportedsoon",
            }
        ]
    )

    return (
        <div> 
            <div>This is the store.</div>
            <div>
                {shoppingItems.map((item, i) => {
                    return(
                        <div>
                        <p>{item.name}</p>
                        <p>{item.price}</p>
                        </div>
                    )
            })
        }</div>
        </div>
    )
}

export default Store;