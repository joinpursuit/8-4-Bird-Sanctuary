import React, { useState } from 'react'

export default function BirdCard(props) {
    const { name, image, amount, id, cart, setCart, total, setTotal } = props

    const adopt = ((event) => {
        event.preventDefault()
        setCart([...cart, `${name} $${amount}`])
        setTotal([...total, amount])
        })
    return (
        <div className="bCard">
            <h5>{name}</h5>
            <h6>Price:{amount}</h6>
            <img className="reveal" height="150 px" width="150" src={image} alt="Bird Pic" /><br/>
            <button onClick={adopt}>Adopt</button>
        </div>
    )
}
