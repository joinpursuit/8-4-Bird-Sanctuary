import React from 'react';
import '../App.css';

const BirdCard = ({ name, amount, img, setCart,cart,id }) => {
  return (
    <>
      <div className="card">
        <h2>{name}</h2>
        <h4>Price: ${amount}</h4>
        <img src={img} alt="" />
        <button className="birds" onClick={() =>setCart([...cart,{name,amount,id}])} >Adopt</button>
      </div>
    </>
  );
};

export default BirdCard;
