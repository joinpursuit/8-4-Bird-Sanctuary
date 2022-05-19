import React from "react";
import bonusItems from "../data/bonusItems";
import Bonus from "./bonus";

const Cart = (props) => {
  const { cartArray, result } = props;
  let total = 0;
  let final = 0;
  result.map((price) => {
    total += price;
    // console.log(total)
  });
  // If the value is greater than 3 return 10 else 0
  const discount = () => {
    if (cartArray.length >= 3) {
      return 10;
    } else {
      return 0;
    }
  };
//   I can get a 10% discount if I have 3 or more birds in my cart
  if (cartArray.length >= 3) {
    final = total * 0.9;
  } else {
    final = total;
  }
  const removeItem = (e) => {
    e.target.parentNode.remove()
  }
//   const addTotal = (e) => {

//   }
  return (
    //   The cart has a class name of `Cart`
    <div className="cart">
      <h1>Cart</h1>
      <h3>Discount : {discount()}% </h3>
      <h4>Total: ${final}</h4>
      
      <ol>
        {cartArray.map((ola) => {
          return <li>{ola}
          {ola.name}
          {ola.amount}
         
          <button onClick={removeItem}>Delete</button>
          </li>;
        })}
      </ol>
      <p>Your donations have qualified you for the following items.</p>
      <Bonus final = {final}/>
    </div>
  );
};
export default Cart;
