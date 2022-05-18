import React, { useState } from "react";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Birds from "./Components/Birds";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Cart cart={cart} 
        birdData={birdData} 
        setCart={setCart} 
        bonusItems={bonusItems}/>
      <Birds
        setCart={setCart}
        cart={cart}
        birdData={birdData}
        
      />
      <Checkout />
    </div>
  );
};

export default App;
