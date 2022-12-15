import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Nav from "./Nav";
import Homepage from "../src/Components/Homepage";
import Store from "../src/Components/Store";
import Cart from "../src/Components/Cart";

import { airneos, airneoscover, avian, aviancover, bewd, bewdcover, bladedge, bladedgecover, bubbleman, bubblemancover, burst, burstcover, clayman, claymancover, cyberblader, cyberbladercover, cyberdragon, cyberdragoncover, cyberdragoninfinity, cyberdragoninfinitycover, cyberenddragon, cyberenddragoncover, darkhole, darkholecover, darkmagician, darkmagiciancover, flamewingman, flamewingmancover, futurefusion, futurefusioncover, gaia, gaiacover, gracefulcharity, gracefulcharitycover, hpfd, hpfdcover, infiniteimpermanence, infiniteimpermanencecover, mirrorforce, mirrorforcecover, monsterreborn, monsterreborncover, mst, mstcover, obelisk, obeliskcover, philstone, philstonecover, poly, polycover, potofgreed, potofgreedcover, powerbond, powerbondcover, ra, racover, rainbowdragon, rainbowdragoncover, sealof, sealofcover, shining, shiningcover, slifer, slifercover, sparkman, sparkmancover, steamroid, steamroidcover, stratos, stratoscover, superpoly, superpolycover, swords, swordscover, tradein, tradeincover, transcendentwings, transcendentwingscover, tribute, tributecover, wildheart, wildheartcover, wingedkuriboh, wingedkuribohcover, yubel, yubelcover }  from "./images";


const RouteSwitch = () => {

    let [cartShown, setCartShown] = useState(false);
    let [price, setPrice] = useState(0);

    useEffect(() => {
        console.log(cartShown);
        console.log("returned");
        setCartShown(true);
        
    }, [cartShown])

    // shopping items
    const [shoppingItems, setShoppingItems] = useState(
        [
            {
                name: "Elemental Hero Air Neos",
                price: "40",
                quantity: 0,
                fakequantity: 0,
                image: airneos,
                cover: airneoscover,
                rarity: "Ultra Rare"
            },
            {
                name: "Elemental Hero Avian",
                price: "0.20",
                quantity: 0,
                fakequantity: 0,
                image: avian,
                cover: aviancover,
                rarity: "Common"
            },
            {
                name: "Blue Eyes White Dragon",
                price: "0.80",
                quantity: 0,
                fakequantity: 0,
                image: bewd,
                cover: bewdcover,
                rarity: "Common"
            },
            {
                name: "Elemental Hero Bladege",
                price: "0.90",
                quantity: 0,
                fakequantity: 0,
                image: bladedge,
                cover: bladedgecover,
                rarity: "Super Rare"
            },
            {
                name: "Elemental Hero Bubbleman",
                price: "0.40",
                quantity: 0,
                fakequantity: 0,
                image: bubbleman,
                cover: bubblemancover,
                rarity: "Super Rare"
            },
            {
                name: "Elemental Hero Burstinatrix",
                price: "0.30",
                quantity: 0,
                fakequantity: 0,
                image: burst,
                cover: burstcover,
                rarity: "Common"
            },
            {
                name: "Elemental Hero Clayman",
                price: "0.40",
                quantity: 0,
                fakequantity: 0,
                image: clayman,
                cover: claymancover,
                rarity: "Common"
            },
            {
                name: "Cyber Blader",
                price: "1.40",
                quantity: 0,
                fakequantity: 0,
                image: cyberblader,
                cover: cyberbladercover,
                rarity: "Ultra Rare"
            },
            {
                name: "Cyber Dragon",
                price: "2.00",
                quantity: 0,
                fakequantity: 0,
                image: cyberdragon,
                cover: cyberdragoncover,
                rarity: "Secret Rare"
            },
            {
                name: "Cyber Dragon Infinity",
                price: "4.00",
                quantity: 0,
                fakequantity: 0,
                image: cyberdragoninfinity,
                cover: cyberdragoninfinitycover,
                rarity: "Ultra Rare"
            },
            {
                name: "Cyber End Dragon",
                price: "8.00",
                quantity: 0,
                fakequantity: 0,
                image: cyberenddragon,
                cover: cyberenddragoncover,
                rarity: "Secret Rare"
            },
            {
                name: "Dark Hole",
                price: "2.20",
                quantity: 0,
                fakequantity: 0,
                image: darkhole,
                cover: darkholecover,
                rarity: "Super Rare"
            },
            {
                name: "Dark Magician",
                price: "0.60",
                quantity: 0,
                fakequantity: 0,
                image: darkmagician,
                cover: darkmagiciancover,
                rarity: "Ultra Rare"
            },
            {
                name: "Elemental Hero Flame Wingman",
                price: "3.40",
                quantity: 0,
                fakequantity: 0,
                image: flamewingman,
                cover: flamewingmancover,
                rarity: "Ultra Rare"
            },
            {
                name: "Future Fusion",
                price: "0.80",
                quantity: 0,
                fakequantity: 0,
                image: futurefusion,
                cover: futurefusioncover,
                rarity: "Super Rare"
            },
            {
                name: "Gaia the Fierce Knight",
                price: "0.10",
                quantity: 0,
                fakequantity: 0,
                image: gaia,
                cover: gaiacover,
                rarity: "Common"
            },
            {
                name: "Graceful Charity",
                price: "1.60",
                quantity: 0,
                fakequantity: 0,
                image: gracefulcharity,
                cover: gracefulcharitycover,
                rarity: "Common"
            },
            {
                name: "Harpie's Feather Duster",
                price: "5.60",
                quantity: 0,
                fakequantity: 0,
                image: hpfd,
                cover: hpfdcover,
                rarity: "Super Rare"
            },
            {
                name: "Infinite Impermanence",
                price: "26",
                quantity: 0,
                fakequantity: 0,
                image: infiniteimpermanence,
                cover: infiniteimpermanencecover,
                rarity: "Secret Rare"
            },
            {
                name: "Mirror Force",
                price: "2.40",
                quantity: 0,
                fakequantity: 0,
                image: mirrorforce,
                cover: mirrorforcecover,
                rarity: "Ultra Rare"
            },
            {
                name: "Monster Reborn",
                price: "1.90",
                quantity: 0,
                fakequantity: 0,
                image: monsterreborn,
                cover: monsterreborncover,
                rarity: "Ultra Rare"
            },
            {
                name: "Mystical Space Typhoon",
                price: "0.70",
                quantity: 0,
                fakequantity: 0,
                image: mst,
                cover: mstcover,
                rarity: "Super Rare"
            },
            {
                name: "Obelisk the Tormentor",
                price: "4.20",
                quantity: 0,
                fakequantity: 0,
                image: obelisk,
                cover: obeliskcover,
                rarity: "Ultra Rare"
            },
            {
                name: "Sabatiel - The Philosopher's Stone",
                price: "7.20",
                quantity: 0,
                fakequantity: 0,
                image: philstone,
                cover: philstonecover,
                rarity: "Super Rare"
            },
            {
                name: "Polymerization",
                price: "0.60",
                quantity: 0,
                fakequantity: 0,
                image: poly,
                cover: polycover,
                rarity: "Super Rare"
            },
            {
                name: "Pot of Greed",
                price: "3.10",
                quantity: 0,
                fakequantity: 0,
                image: potofgreed,
                cover: potofgreedcover,
                rarity: "Super Rare"
            },
            {
                name: "Power Bond",
                price: "2.40",
                quantity: 0,
                fakequantity: 0,
                image: powerbond,
                cover: powerbondcover,
                rarity: "Super Rare"
            },
            {
                name: "The Winged Dragon of Ra",
                price: "7.60",
                quantity: 0,
                fakequantity: 0,
                image: ra,
                cover: racover,
                rarity: "Ultra Rare"
            },
            {
                name: "Rainbow Dragon",
                price: "5.10",
                quantity: 0,
                fakequantity: 0,
                image: rainbowdragon,
                cover: rainbowdragoncover,
                rarity: "Super Rare"
            },
            {
                name: "The Seal of Orichalcos",
                price: "2.00",
                quantity: 0,
                fakequantity: 0,
                image: sealof,
                cover: sealofcover,
                rarity: "Ultra Rare"
            },
            {
                name: "Elemental Hero Shining Flare Wingman",
                price: "5.80",
                quantity: 0,
                fakequantity: 0,
                image: shining,
                cover: shiningcover,
                rarity: "Secret Rare"
            },
            {
                name: "Slifer the Sky Dragon",
                price: "3.10",
                quantity: 0,
                fakequantity: 0,
                image: slifer,
                cover: slifercover,
                rarity: "Ultra Rare"
            },
            {
                name: "Elemental Hero Sparkman",
                price: "0.40",
                quantity: 0,
                fakequantity: 0,
                image: sparkman,
                cover: sparkmancover,
                rarity: "Common"
            },
            {
                name: "Elemental Hero Stratos",
                price: "4.90",
                quantity: 0,
                fakequantity: 0,
                image: stratos,
                cover: stratoscover,
                rarity: "Ultra Rare"
            },
            {
                name: "Steamroid",
                price: "1.60",
                quantity: 0,
                fakequantity: 0,
                image: steamroid,
                cover: steamroidcover,
                rarity: "Super Rare"
            },
            {
                name: "Super Polymerization",
                price: "2.80",
                quantity: 0,
                fakequantity: 0,
                image: superpoly,
                cover: superpolycover,
                rarity: "Super Rare"
            },
            {
                name: "Swords of Revealing Light",
                price: "0.50",
                quantity: 0,
                fakequantity: 0,
                image: swords,
                cover: swordscover,
                rarity: "Ultra Rare"
            },
            {
                name: "Trade-In",
                price: "0.80",
                quantity: 0,
                fakequantity: 0,
                image: tradein,
                cover: tradeincover,
                rarity: "Common"
            },
            {
                name: "Transcendent Wings",
                price: "0.60",
                quantity: 0,
                fakequantity: 0,
                image: transcendentwings,
                cover: transcendentwingscover,
                rarity: "Super Rare"
            },
            {
                name: "Torrential Tribute",
                price: "1.30",
                quantity: 0,
                fakequantity: 0,
                image: tribute,
                cover: tributecover,
                rarity: "Super Rare"
            },
            {
                name: "Elemental Hero Wildheart",
                price: "0.50",
                quantity: 0,
                fakequantity: 0,
                image: wildheart,
                cover: wildheartcover,
                rarity: "Common"
            },
            {
                name: "Winged Kuriboh",
                price: "0.90",
                quantity: 0,
                fakequantity: 0,
                image: wingedkuriboh,
                cover: wingedkuribohcover,
                rarity: "Ultra Rare"
            },
            {
                name: "Yubel",
                price: "3.30",
                quantity: 0,
                fakequantity: 0,
                image: yubel,
                cover: yubelcover,
                rarity: "Ultra Rare"
            },
        ]
    )
    useEffect(() => {
        let temptotal = 0;
        shoppingItems.map((item, i) => {
            let tempprice;
            if (item.quantity > 0) {
                tempprice = item.quantity * item.price;
                temptotal = tempprice + temptotal;
                
                return temptotal;
            }            
        })
        // console.log(`this is temptotal: ${temptotal}`)
        setPrice(temptotal);
    }, [shoppingItems]);

    /// STORE
    /// FAKES
    const fakeHandleChange = (item, i, e) => {
        setShoppingItems([...shoppingItems].map(object => {
            if (object.name === item.name) {
                return {
                    ...object,
                    fakequantity: e.target.value,
                }
            } 
            else return object
        }))
    }

    const fakeIncrease = (item, i) => {
        setShoppingItems([...shoppingItems].map(object => {
            if (object.name === item.name) {
                return {
                    ...object,
                    fakequantity: +object.fakequantity + 1,
                }
            }
            else return object;
        }))
        console.log(shoppingItems);
    };
    

    const fakeDecrease = (item, i) => {
        setShoppingItems([...shoppingItems].map(object => {
            if (object.name === item.name) {
                if (object.fakequantity === 0) {
                    return {
                        ...object,
                        fakequantity: 0
                    }
                } else {
                    return {
                        ...object,
                        fakequantity: +object.fakequantity - 1,
                    }
                }
            }
            else return object;
        }))
        console.log(shoppingItems);
    }

    /// END OF FAKES

    const addFakeQuantityToRealQuantity = (item) => {
        setShoppingItems([...shoppingItems].map(object => {
            if (object.name === item.name) {
                return {
                    ...object,
                    quantity: +object.fakequantity + +object.quantity,
                    fakequantity: 0,
                }
            } 
            else return object
        }))
    }

    /// CART
    const handleChange = (item, i, e) => {
        setShoppingItems([...shoppingItems].map(object => {
            if (object.name === item.name) {
                return {
                    ...object,
                    quantity: e.target.value,
                }
            } 
            else return object
        }))
    }

    const increase = (item, i) => {
        console.log("guren mark 3, launch!")
        setShoppingItems([...shoppingItems].map(object => {
            if (object.name === item.name) {
                return {
                    ...object,
                    quantity: +object.quantity + 1,
                }
            }
            else return object;
        }))
        console.log(shoppingItems);
    };
    

    const decrease = (item, i) => {
        setShoppingItems([...shoppingItems].map(object => {
            
            if (object.name === item.name) {
                
                return {
                    ...object,
                    quantity: +object.quantity - 1,
                }
            }
            else return object;
        }))
        console.log(shoppingItems);
    }

    let [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let tempquantitytotal = 0;
        shoppingItems.map((item, i) => {
            tempquantitytotal = +tempquantitytotal + +item.quantity
        })
        setCartCount(+tempquantitytotal);
    }, [shoppingItems])

        return (
            <BrowserRouter>
                <Nav cartCount={cartCount} 
                cartShown={cartShown} 
                setCartShown={ () => { setCartShown(false)} } 
                shoppingItems={shoppingItems} increase={increase} 
                decrease={decrease} handleChange={handleChange} 
                price={price}/>
                
                <Routes>
                    <Route path={"/"} element={<Homepage />} />
                    <Route path={"/store"} element={<Store shoppingItems={shoppingItems} fakeIncrease={fakeIncrease} fakeDecrease={fakeDecrease} fakeHandleChange={fakeHandleChange} update={addFakeQuantityToRealQuantity}/>} />
                    <Route path={"/cart"} element={<Cart cartShown={cartShown} setCartShown={ () => { setCartShown(false)} } shoppingItems={shoppingItems} increase={increase} decrease={decrease} handleChange={handleChange} price={price}/> }/>
                </Routes>
                
            </BrowserRouter>
            )
    }

export default RouteSwitch;