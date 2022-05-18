import React from "react";
import Card from "./Card";
import Cart from  "./Cart";

const Birds = ( {birds,setTotalAmount,totalAmount,setNameArr,bonusItems,currentBonus} ) => {
  return (

    <ul>
      {birds.map(({id,name,amount,img}) => {
        return (
          <li key={id} className="card birds" >
            <Card name={name} amount={amount} img={img} setTotalAmount={setTotalAmount} totalAmount={totalAmount} setNameArr={setNameArr} bonusItems={bonusItems} currentBonus={currentBonus}/>
       
            {/* <Cart/>   */}
            {/* dont want it here cuz it runs with map - instead of by itself */}
            
          </li>
        );
      })}
    </ul>
  );
};

export default Birds;