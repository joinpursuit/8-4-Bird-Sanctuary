import React from "react";
import Card from "./Card";
import Cart from  "./Cart";

const Birds = ({ birds }) => {
  return (
    <ul>
      {birds.map(({id,name,amount,img,setTotalAmount,totalAmount}) => {
        return (
          <li key={id} className="card">
            <Card name={name} amount={amount} img={img} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
            {/* <Cart/>   */}
            {/* dont want it here cuz it runs with map - instead of by itself */}
            
          </li>
        );
      })}
    </ul>
  );
};

export default Birds;