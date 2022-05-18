import React from 'react';

const BirdCard = ({name, amount, img, id, cart, setCart}) => {

    return (
        <div className="birds">
            <h4>{name}</h4>
            <p>${amount.toFixed().toString()}</p>
            <img src={img} alt={name} width='200px'/>
            <br/>
            <button className="button" value={id} onClick={()=>setCart([...cart, {name, amount}])}>Adopt</button>
        </div>
    )
}

export default BirdCard;