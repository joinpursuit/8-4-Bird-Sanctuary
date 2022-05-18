const Cart = ({ cart, setCart, bonusItems }) => {

  let total = 0;
  
  cart.map(bird => {
      cart.length >= 3 ? total += bird.amount - (bird.amount * .10) : total += bird.amount;
  })

  let bonus = [];

if (total >= 100 && total < 300) {
    bonus.push(bonusItems[0])
} else if (total >= 300 && total < 500) {
    bonus.push(bonusItems[0], bonusItems[1])
} else if (total >= 500 && total < 1000) {
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2])
} else if (total >= 1000){
    bonus.push(bonusItems[0], bonusItems[1], bonusItems[2], bonusItems[3])
}

const handleDelete = (i) =>{
  const newCart = cart.filter(item => cart.indexOf(item) !== i);
  setCart(newCart)
}


  return (
    <div className="Cart">
      <h3>Cart</h3>
      <h3>Discount: {cart.length >= 3 ? 10 : 0}%</h3>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((bird, i) => {
            return (
            <li>
              {bird.name}: ${bird.amount.toFixed(2)}
              <button id={i} onClick={() => handleDelete(i)}>x</button>
            </li>

          );
        })}
      </ol>
      <p>Your donations has qualified you for the following items: </p>
      <ul>
          {bonus.map(item => {
              return (
                  <li>
                      {item}
                  </li>
              )
          })}
      </ul>
    </div>
  );
};

export default Cart;
