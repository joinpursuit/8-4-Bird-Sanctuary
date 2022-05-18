import React from "react";

const BirdCard = ({ name, amount, img, id, cart, setCart }) => {
  return (
    <div className="card">
      <h4>{name}</h4>
      <p>${amount.toFixed()}</p>
      <img src={img} alt={name} width="200px" />
      <br />
      <button
        className="birds"
        value={id}
        onClick={() => setCart([...cart, { name, amount }])}
      >
        Adopt
      </button>
    </div>
  );
};

export default BirdCard;
