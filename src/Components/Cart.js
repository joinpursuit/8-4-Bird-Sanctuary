const Cart = ({ cart, bonusItems }) => {
  let total = 0;

  cart.map((bird) => {
    cart.length >= 3
      ? (total += bird.amount - bird.amount * 0.1)
      : (total += bird.amount);
  });

  let bonus = [];
  console.log(bonus);

  if (total >= 100 && total <= 300) {
    bonus.push(bonusItems[0]);
  } else if (total >= 300 && total <= 500) {
    bonus.push(bonusItems[0], bonusItems[1]);
  } else if (total >= 500 && total <= 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2]);
  } else if (total > 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3]);
  }

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Discount: {cart.length >= 3 ? 10 : 0}%</h4>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((bird) => {
          return (
            <li>
              {bird.name}: ${bird.amount.toFixed(2)}
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
