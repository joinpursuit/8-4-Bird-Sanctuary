import React, {useState} from "react";



const Cart = ({ cart, bonusItems }) => {
  let total = 0;
  cart.map(item => {
    return cart.length >= 3
      ? total += item.amount - (item.amount * 0.1)
      : total += item.amount;
  })
  let bonus = [];

  if (total >= 100 && total <= 299) {
    bonus.push(bonusItems[0])
  } else if (total >= 300 && total <= 499) {
    bonus.push(bonusItems[0], bonusItems[1])
  } else if (total >= 500 && total <= 999) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (total > 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3])
  }
//   const Remove = () => {
//       const [cart, setCart] = useState([cart])
//     function handleDelete(id) {
//     const newCart = cart.filter((item) => item.id !== id);
//     setCart(newCart);

// }
  return (
    <div className="Cart">
        <h2>Cart</h2>
      <ul>
        {cart.map((item) => {
          return (
            <li className="Cart" key={item.id}>
              {item.name}: - ${item.amount.toFixed(2)}
              <button type="button"> Delete </button>
            </li>
          );
        })}
      </ul>
      <h4> Discount: {cart.length > 3 ? 10 : 0}% </h4>
      <h4>Total: ${total}</h4>
      <p>Your donation has qualified you for the following items:</p>
      <ul>
          {bonus.map(bon => {
              return (
                  <li>{bon}</li>
              )
          })}
      </ul>
    </div>
  );
};

export default Cart;
