import React from "react";
//get the data for a single card/strcuture/display. 
const Card = ({name,img,amount}) => {
 return (
     <>
    <p>{name}</p>
    <p>{amount}</p>
    <img src={img} alt={name}/>
    </>
 )
}

export default Card;