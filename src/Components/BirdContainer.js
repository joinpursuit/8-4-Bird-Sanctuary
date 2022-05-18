

import React from 'react'
import birdData from '../data/birds'
import BirdCard from './BirdCard'

export default function BirdContainer(props) {
    const { setCart, cart, total, setTotal} = props
    return (
        <div className="birds">
            {birdData.map((bird) => {
                return (
                    <BirdCard 
                        name={bird.name}
                        amount={bird.amount}
                        image={bird.img}
                        id={bird.id}
                        setCart={setCart}
                        cart={cart}
                        total={total}
                        setTotal={setTotal}
                        
                    />
                )
            }
            )}
        </div>
    )
}

