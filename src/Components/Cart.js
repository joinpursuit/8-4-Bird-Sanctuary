import React from 'react'
import bonusItems from '../data/bonusItems'
import BirdCard from './BirdCard'


export default function Cart(props) {
    const {cart, adoptedBirds} = props
    
  return (
    <div>
        <h3>Cart</h3>
        <h2>Discount:</h2>
        <h2>Total</h2> 
        <ol>
            <li>{cart}</li>
        </ol>
    </div>
  )
}
