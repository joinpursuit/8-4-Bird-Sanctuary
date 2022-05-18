import React from 'react';
import birdData from './data/birds';
import BirdCards from './Components/BirdCards';
import Cart from './Components/Cart'
import Checkout from './Components/Checkout';
import bonusItems from './data/bonusItems'
import { useState } from 'react';


const App = () => {

  const [cart, setCart] = useState([])
  

  return (
  
    <div className ='bird-card'>
      <Cart cart={cart} bonusItems={bonusItems} />
      <BirdCards birds={birdData } setCart={setCart} cart={cart}  />
      <Checkout />
      </div>
   
  );
};

export default App;
