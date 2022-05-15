import react from "react";
import { useState } from "react"


//Cart is gonna be the laybout????

const Cart = (props) => {
    const { totalAmount } = props;

// console.log(amount)
//make a function called 
// const addToTotal = (e) => {//keeps tabs on total. 
//     const { value } = e.target;
//     setTotal(value);
// }

return (
<div>
<h1>Cart</h1>
<p>Total amount: {totalAmount}</p>
<p>Discount:</p>
{/* <button className="birds" onClick={console.log("addToCart")}>add to cart</button> */}
</div>


)


}

export default Cart;