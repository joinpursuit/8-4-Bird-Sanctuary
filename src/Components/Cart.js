// import { useState } from "react";
import birdData from "../data/birds";
import bonusItems from "../data/bonusItems";
import Birds from "./Birds";

const Cart = (props) => {
    const {cart, setCart, birdType, setBirdType} = props
    return (
        <div id="cart">
            <h2>Cart</h2>
            <h5>Discount: 0%</h5>
            <h5>Total: ${cart}</h5>
            <p>{birdType}</p>

            <p>Your donations has qualified you for the following items:</p>
        </div>
    )

}
export default Cart