const Cart = ({ cart,setCart, bonusItems }) => {
  let total = 0;

  cart.map(bird => {
    cart.length >= 3 ? total += bird.amount * 0.9 : total += bird.amount;
  });

  let bonus = [];

  if (total >= 100 && total < 300) {
    bonus.push(bonusItems[0]);
  } else if (total >= 300 && total < 500) {
    bonus.push(bonusItems[0], bonusItems[1]);
  } else if (total >= 500 && total < 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (total >= 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
  }
  function handleRemove(prod){
    console.log(prod)
      const remove = cart.filter(
          
          (bird) => cart.indexOf(bird) !== cart.indexOf(prod)   
      )
      console.log(remove)
setCart(remove)
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Discount: {cart.length >= 3 ? 10 : 0}%</h4>
      <h4>Total:${total}</h4>
      <ol>
        {cart.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount}
              <button onClick={() => handleRemove(bird) }>x</button>
            </li>
          );
        })}
      </ol>
      <p>Your donations has qualified you for the following items: </p>
      <ul>
        {bonus.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default Cart;










//CODE GRAVEYARD WELCOME!!!
// import  { useState } from "react";
// import cards from "./Birdcard";
// const Cart = ({name, amount}) => {
//         const [adopt, setAdopt] = useState("");
//         const handleAdopt = (event) =>{
//             event.preventDefault();
//             setAdopt(console.log(name, amount));
//         }
// return (
//     <div className="cart">
//         <h1>Cart</h1>
//         <ol></ol>
//         <h4>Discount:</h4>
//         <h4>Totals:</h4>
//     </div>
// )
// }
// export default Cart
