// import { useState } from "react";
import birdData from "../data/birds";
import bonusItems from "../data/bonusItems";
import Cart from "./Cart";


const Bird = (props) => {
    // const [total, setTotal] = useState(0)
    // const handleTotal = (total, setTotal) =>{
    //    setTotal(total + birdData.map((bird) => bird.amount))
    // }   



    let { name, amount, img, cart, setCart, birdType, setBirdType } = props

    const handleCart = (props) => {
        setCart(parseInt(cart + amount))
        setBirdType(birdType += name)
    }
    return (
        <div >
            <div id="bird">
                <h5>{name}</h5>
                <br></br>
                <h6>${amount}</h6>
                <br></br>
                <img src={img} alt={name} />
                <br></br>
                <button onClick={handleCart}>Adopt</button>
            </div>

        </div>
    )
}
export default Bird