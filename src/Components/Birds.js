// import { useState } from "react";
import birdData from "../data/birds";
import bonusItems from "../data/bonusItems";
import Bird from "./Bird";

const Birds = (props) => {
    const {cart, setCart, birdType, setBirdType} = props
    return (
        <div id="bird">
            {birdData.map((bird) => {
                return (<Bird
                name={bird.name}
                amount={bird.amount}
                img={bird.img}
                cart = {cart}
                setCart = {setCart}
                birdType = {birdType}
                setBirdType = {setBirdType}
                />
                )
            }) 
        }
        </div>

    )
    }


export default Birds