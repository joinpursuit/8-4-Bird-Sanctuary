

import React, {useState} from 'react'
import BirdContainer from './Components/BirdContainer';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';



const App = () => {
  const [cart, setCart] = useState("")
  let adoptedBirds = []
  return (
    <div>
      <h2>Bird Sanctuary</h2>
      <main>
        <BirdContainer setCart = {setCart} adoptedBirds = {adoptedBirds} cart = {cart}/>
        <Cart cart= {cart} adoptedBirds = {adoptedBirds}/>
        <Checkout/>
      </main> 
  </div>   
  );
};

export default App;
