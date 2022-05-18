import React from "react";



const BirdCard = ({name, amount, img, cart, setCart}) => {


return (
   <div className="birds card" >
    <h4>{name}</h4>
    <p>{amount.toFixed()}</p>
    <img src={img} alt={name} width="200px"/>
    <p>
    <button className="birds" onClick= {() => setCart([...cart, {name, amount}])}>
        Adopt
    </button>
    </p>
    </div>

)
}

export default BirdCard;