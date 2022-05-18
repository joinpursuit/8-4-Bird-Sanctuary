import React from "react";
import BirdCard from "./BirdCard";



const Birds = ({birdData, cart, setCart}) => {

return (
  <ol>
      {
          birdData.map((bird) => {
              return(
                  <li key={bird.id}>
                      <BirdCard
                        cart={cart}  
                        setCart={setCart}
                        name={bird.name}
                       amount={bird.amount}
                       img={bird.img}/>
                  </li>
              )
          })
      }

  </ol>
)
}

export default Birds;