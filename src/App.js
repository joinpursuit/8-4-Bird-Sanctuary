

import React, { useState } from 'react'
import BirdContainer from './Components/BirdContainer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import './App.css';
const App = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState([])
  return (
    <div className="grid">
      <h2 className="title">Bird Sanctuary</h2>
        <BirdContainer 
          cart={cart} 
          setCart={setCart}
          total={total}
          setTotal={setTotal}
          />
        <Cart className="cart" cart={cart} setCart={setCart} total = {total}/>
        <Checkout className="checkOut" setCart={setCart} setTotal={setTotal}/>
    </div>
  );
};

export default App;
