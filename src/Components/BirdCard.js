
import React, { useState } from 'react'
import CartItem from './CartItem'


export default function BirdCard(props) {
    const { name, image, amount, id, cart, setCart, adoptedBirds } = props

    const adopt = ((event) => {
        event.preventDefault()
        setCart(`${name} $${amount}`)
        adoptedBirds.forEach((bird) =>{
            return<li>birds.name</li>
        })
        adoptedBirds.push(cart)
    })

    return (

        <div>
            <h3>{name}</h3>
            <h4>Price:{amount}</h4>
            <img src={image} alt="Bird Pic" />
            <button onClick={adopt}>Adopt</button>
            <adopt />
        </div>
    )
}
