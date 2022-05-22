import React from "react";
import Cart from "./Cart";
import { useState } from "react";


const Card = ({
  name,
  img,
  amount,
  setTotalAmount,
  totalAmount,
  setNameArr,
  bonusItems,
  currentBonus,
  nameArr,
}) => {
  
  const [currentPrice, setCurrentPrice] = useState(0);

  const addToCart = () => {
    
    setTotalAmount(Number(totalAmount + amount));
    setCurrentPrice(Number(totalAmount));
    
    setNameArr((prev) => [...prev, name]);
  };

  return (
    <>
      <p>{name}</p>
      <p>{amount}</p>
      <img src={img} alt={name} height="200px" width="200px" />

      <button onClick={addToCart} className="birds">
        {" "}
        ADD TO CART
      </button>
      {/* <Cart> */}
    </>
  );
};

export default Card;