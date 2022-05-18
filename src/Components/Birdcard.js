import React from 'react';
// Props
const Birdcard = ({name, amount, img, id, cart, setCart}) => {
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

export default Birdcard;





// import birdData from "../data/birds";
// // const Birds = (props) => {
// //   return birdData.map((bird) => {
// //     return (
// //       <div className="card">
// //         <h4>{bird.name}</h4>
// //         <p>Price: ${bird.amount}</p>
// //         <img src={bird.img} alt={bird.name} width='200px' />
// //         <br></br>
// //         <button className="cart">ADOPT</button>
// //       </div>
// //     );
// //   });
// // };
// export default Birds;
