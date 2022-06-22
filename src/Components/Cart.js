import React from 'react'
import Bonus from './Bonus'
import BirdCard from './BirdCard'


export default function Cart(props) {
  const { cart, total, setCart} = props
  let sum = 0

  total.map((amt) => {
    sum += amt
  })
  let discount = 0
  if (cart.length >= 3) {
    discount = 10
    sum = sum * .9
  }
 const removeItemFromCart = (event)=>{
  const indexOfBirdToRemove = event.target.parentNode.value
  let tempArr = cart.slice()

  tempArr = tempArr.slice(0, indexOfBirdToRemove).concat(tempArr.slice(indexOfBirdToRemove+1));
  setCart(tempArr)
   
 }



  return (
    <div className="cart">
      <h3>Cart</h3>
      <h4>Discount: {discount}%</h4>
      <h4>Total: ${sum}</h4>
      {console.log(total)}
      <ol>
        {cart.map((bird, index) => {
          return <li value={index}>{bird}&nbsp;&nbsp;<button onClick={removeItemFromCart}>Remove</button></li>
        })}
      </ol>
      <Bonus
        sum={sum}
      />
    </div>
  )
}
