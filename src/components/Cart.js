const Cart = ({ cart, bonusItems }) => {
  let discount;
  {
    cart.length >= 3 ? (discount = 10) : (discount = 0);
  }

  let total = 0;
  cart.map((bird) => {
    cart.length >= 3 ? (total += bird.amount * 0.9) : (total += bird.amount);
  });

  let bonuses;

  if (total >= 1000) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
      </ul>
    );
  } else if (total >= 500 && total < 1000) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
      </ul>
    );
  } else if (total >= 300 && total < 500) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
      </ul>
    );
  } else if (total >= 100 && total < 300) {
    bonuses = (
      <ul>
        <li>{bonusItems[0]}</li>
      </ul>
    );
  }

  // const removeItem = (item) => {
  //   let filteredCart = cart.filter(
  //     (x) => cart.indexOf(x) !== cart.indexOf(item)
  //   );
  //   setCart(filteredCart);
  // };

  const removeItem = (e) => {
    e.target.parentNode.remove()
  }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h3>Discount: {discount}%</h3>
      <h4>Total:${total}</h4>
      <ol>
        {cart.map((x) => {
          return (
            <li>
               {x.name} : $
              {x.amount}
              <button onClick={removeItem}>Remove</button>
            </li>
          );
        })}
      </ol>
      <p>Your donations have qualified you for the following items</p>
      <p>{bonuses}</p>
    </div>
  );
};

export default Cart;
