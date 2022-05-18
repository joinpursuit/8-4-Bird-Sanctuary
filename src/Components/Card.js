import React from "react";
import Cart from "./Cart"
import { useState } from "react"

//get the data for a single card/strcuture/display. 
const Card = ({name,img,amount,setTotalAmount,totalAmount, setNameArr,bonusItems,currentBonus,nameArr}) => {
   //do we need to make a state? - arr name 
  const [currentPrice, setCurrentPrice] = useState(0);
   
const addToCart = () => {//needs to be in the Card to function. - 
   setTotalAmount(Number(totalAmount + amount));
   setCurrentPrice(Number(totalAmount));/////ssooo i can use the ttal amount
   //sent name of the bird
   setNameArr(prev => [...prev, name] );


}


 return (
    <>
    <p>{name}</p>
    <p>{amount}</p>
    <img src={img} alt={name} height="200px" width="200px"/>

    <button onClick={addToCart} className="birds"> ADD TO CART</button>
    {/* <Cart> */}
    </>
 )
}

export default Card;