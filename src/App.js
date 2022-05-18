import React from 'react';

import birdData from "./data/birds"
import { useState } from "react";
import PageForCards from "./Component/PageForBirdCards";
import BirdCard from "./Component/BirdCard";
import Cart from "./Component/Cart";
import Checkout from "./Component/Checkout"

const App = () => {
  const [cart, setCart] = useState([]);
  

  return (
    <div>
      <Cart cart={cart} setCart={setCart} />
      <PageForBirdCards birds={birdData} setCart={setCart} cart={cart} />
    </div>
  );
};

export default App;
