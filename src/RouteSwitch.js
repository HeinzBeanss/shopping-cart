import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Homepage from "../src/Components/Homepage";
import Store from "../src/Components/Store";
import Cart from "../src/Components/Cart";


const RouteSwitch = () => {

    let [cartCount, setCartCount] = useState(0);
    let [cartShown, setCartShown] = useState(false)

    useEffect(() => {
        console.log(cartShown);
        console.log("returned");
        setCartShown(true);
        
    }, [cartShown])


    if (cartShown) {

        return (
            <BrowserRouter>
                <Nav cartCount={cartCount} cartShown={cartShown} setCartShown={ () => { setCartShown(true)} } />
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/store"} element={<Store />} />
                    <Route path={"/cart"} element={<Cart cartShown={cartShown} setCartShown={ () => { setCartShown(false)} } /> }/>
                </Routes>
            </BrowserRouter>
            )
    } else {
        return (
            <BrowserRouter>
                <Nav cartCount={cartCount} />
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/store"} element={<Store />} />
                    <Route path={"/cart"} element={<Cart cartShown={cartShown} setCartShown={ () => { setCartShown(false)} } /> }/>
                </Routes>
            </BrowserRouter>
            )
    }
    

}

export default RouteSwitch;