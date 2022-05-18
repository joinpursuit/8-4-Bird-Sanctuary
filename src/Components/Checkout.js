// import { useState } from "react";
import birdData from "../data/birds";
import bonusItems from "../data/bonusItems";

const Checkout = () => {
    return (
        <form id="checkout">

        <h2>Checkout</h2>

        <h5>First Name</h5>
        <input id="first_name" name="first_name" type="text" />

        <h5>Last Name</h5>
        <input id="last_name" name="last_name" type="text" />

        <h5>Email</h5>
        <input id="email" name="email" type="email" />

        <h5>Zip Code</h5>
        <input id="last_name" name="last_name" type="number" />
        <br></br>
        <button type="submit">Submit</button>

      </form>
    )
}
export default Checkout