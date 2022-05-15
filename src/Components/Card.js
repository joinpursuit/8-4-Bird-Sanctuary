import React from "react";
import Cart from "./Cart"
import { useState } from "react"

//get the data for a single card/strcuture/display. 
const Card = ({name,img,amount,setTotalAmount,totalAmount }) => {
   // const [total, setTotal] = useState("0");
   //const {setTotalAmount,totalAmount} = props;

    const calTotal = () => {//every Card has a total... 
        console.log(totalAmount)
    }


 return (
    <>
    <p>{name}</p>
    <p>{amount}</p>
    <img src={img} alt={name} height="200px" width="200px"/>

    <button onClick={calTotal}> ADD TO CART</button>
    {/* <Cart> */}
    </>
 )
}

export default Card;