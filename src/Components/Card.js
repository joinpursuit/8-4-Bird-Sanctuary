import React from "react";
import Cart from "./Cart"
import { useState } from "react"

//get the data for a single card/strcuture/display. 
const Card = ({name,img,amount,setTotalAmount,totalAmount, setNameArr,bonusItems}) => {
   //do we need to make a state? - arr name 
  
   
const addToCart = () => {//needs to be in the Card to function. - 
   setTotalAmount(Number(totalAmount + amount));
   //sent name of the bird
   setNameArr(prev => [...prev, name]);//===dont really under how this works but ok.......----
   //sent amount of the bird. - to the cart. 


   //run a function that check for totalAmount - and adds bonus item accordingly.
   // if (totalAmount >= 100  && totalAmount <= 300 ){
   //    console.log(bonusItems[0])
   // } else if (totalAmount >= 300 && totalAmount <= 500) {
   //    console.log(bonusItems[1])
   // } else if (totalAmount >= 500 && totalAmount <= 1000) {
   //    console.log(bonusItems[2])
   // } else if (totalAmount > 1000) {
   //    console.log(bonusItems[3])
   // } 
  
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