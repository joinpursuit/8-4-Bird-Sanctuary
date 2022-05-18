import React from 'react';
// Props
const BirdCard = ({name, amount, img, id, cart, setCart}) => {


  
  
    return (
        <div className="card">
            <h4>{name}</h4>
            <p>${amount}</p>
            <img src={img} alt={name} width='200px'/>
            <br/>
            {/* onClick useState from app.js to update the cart with the function setCart then we are going to return the empty cart with the name and ammount of the bird click. */}
            <button className="birds" value={id} onClick={()=>setCart([...cart, {name, amount}])}>ADOPT</button>
        </div>
        
    )
}

export default BirdCard;