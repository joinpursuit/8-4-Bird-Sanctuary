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

// const handleDelete = () =>{
//   for(let i = 0; i < cart.length; i++){
//     let index = cart.indexOf(cart[i]);
//     if(index > -1){
//       cart.splice(cart)
//     }
//   }

//   // cart.forEach(bird => {
//   //   // console.log(cart.indexOf(bird))
//   //   if(cart.indexOf(bird) > -1){
//   //     cart.splice(bird, 1)
//   //   }
//   // })


// //   let foundIndex = cart.indexOf((bird) => {
// //     return bird;
// // });

// // console.log(foundIndex)

// // if (foundIndex > -1) {
// //     cart.splice(foundIndex, 1);
// // }
// }

  return (
    <div className="Cart">
      <h2>Cart</h2>
      <h4>Discount: {cart.length >= 3 ? 10 : 0}%</h4>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((bird) => {
            return (
            <li>
              {bird.name}: ${bird.amount.toFixed(2)}
              <button onClick={() => setCart([])}>x</button>
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
