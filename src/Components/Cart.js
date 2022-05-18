import React from "react"
import birdData from "./data/birds.js"
import "./birdcards.css"



const Cart = () => {
       const total = birdData.amount
    return (
        <div id='cart'>
        <div className="cartname">Cart</div>
        <div className="">$ {total} </div>
        </div>
    )
}

export default Cart