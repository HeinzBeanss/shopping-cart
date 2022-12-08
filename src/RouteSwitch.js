import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Homepage from "../src/Components/Homepage";
import Store from "../src/Components/Store";
import Cart from "../src/Components/Cart";


const RouteSwitch = () => {

    let [cartCount, setCartCount] = useState(0);

    return (
        <BrowserRouter>
            <Nav cartCount={cartCount}/>
            <Routes>
                <Route path={"/"} element={<Homepage />} />
                <Route path={"/store"} element={<Store />} />
                <Route path={"/cart"} element={<Cart />} />
            </Routes>
        </BrowserRouter>
        )

}

export default RouteSwitch;