import React, { useState } from "react"
import Cart from "./components/Cart";
import BirdCards from "./components/BirdCards";
import Checkout from "./components/Checkout";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";




const App = () => {
  const [cart, setCart] = useState([])

  return (
    <div>
      <Cart cart ={cart} bonusItems={bonusItems} setCart={setCart}/>
      <Checkout setCart={setCart}/>
      <BirdCards setCart={setCart} cart={cart} birds={birdData}/>

    </div>
  );
};

export default App;