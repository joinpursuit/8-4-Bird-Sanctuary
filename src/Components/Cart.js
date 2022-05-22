import react from "react";
import { useState } from "react";

const Cart = ({
  birds,
  totalAmount,
  nameArr,
  bonusItems,
  totalDiscount,
  setTotalDiscount,
  currentBonus,
}) => {
  const addBonusItem = () => {
  

    if (totalAmount >= 100 && totalAmount < 300) {
      return <li>{bonusItems[0]}</li>;
    } else if (totalAmount >= 300 && totalAmount <= 500) {
      return (
        <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
        </>
      );
    } else if (totalAmount >= 500 && totalAmount <= 1000) {
      return (
        <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
        </>
      );
    } else if (totalAmount > 1000) {
      return (
        <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
          <li>{bonusItems[3]}</li>
        </>
      );
    }
   
  };

  const addDiscount = () => {
    if (nameArr.length >= 3) {
      setTotalDiscount(10);
    }
  };

  const removeItemFromCart = (e) => {
    e.target.parentNode.remove();
  }

  return (
    <div className="Cart">
      {}
      <h1>Cart</h1>

      {addDiscount()}
      <p>Discount: {totalDiscount}%</p>

      <h4>Total: ${totalAmount}</h4>
      <ol>
        {nameArr.map((name) => {
          for (let i = 0; i < birds.length; i++) {
            if (name === birds[i].name) {
              return (
                <li>
                  {name} ${birds[i].amount} <button onClick={removeItemFromCart}>Remove</button>
                </li>
              );
            }
          }
        })}
      </ol>

      <ul>
        {}
        {}

        {addBonusItem()}

        {}
      </ul>
    </div>
  );
};

export default Cart;