import { useState } from "react";
import birdData from "../data/birds";


const Birds = ({bird, handleClick}) => {
    

    // const adoptMe = (e) => {
    //     console.log(e)
    //     console.log("HELLLLLLO")

    
    // }


  return birdData.map((bird) => {
    return (
      <div className="card">
        <h4>{bird.name}</h4>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.name} width='100px' />
        <br></br>
        <button className="birds" onClick={handleClick}>ADOPT</button>
      </div>
    );
  });
};
export default Birds;