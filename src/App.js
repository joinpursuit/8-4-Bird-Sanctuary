import {React, useState} from 'react'
import './App.css'

import BirdCards from './components/BirdCards'
import birdData from './data/birds';
import Checkout from './components/Checkout';
import Cart from './components/Cart'
import bonusItems from './data/bonusItems'

const App = () => {

const [cartData, setCartData] = useState([]);

// let [discount, setDiscount] = useState(0)




  return (
    <main>
      <article>
      <Cart 
      cartData={cartData}
      bonusItems = {bonusItems}
      setCartData = {setCartData}
      />
      <Checkout setCartData={setCartData}/>
      </article>

      <BirdCards birdData = {birdData} cartData = {cartData} setCartData ={setCartData} />

    </main>
  );
};

export default App;
