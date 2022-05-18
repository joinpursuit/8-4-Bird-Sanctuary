import React from "react";
import "./birdcards.css"

const BirdCard = (birdData) => {
  return (
    <div className='card'>
      {birdData.birdData.map((birds) => {
        return (
            <div class='birds'>
                <div className= 'name'>{birds.name}</div>
                <div className= "amount">${birds.amount}</div>
                <img src={birds.img} alt={birds.name}/>
                <button>Adopt!</button>
            </div>
        )}
)}
    </div>
  );
};

export default BirdCard;
