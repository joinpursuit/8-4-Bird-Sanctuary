import { useState } from "react";
import "./App.css"
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";
import Birds from "./Components/Birds";




const App = () => {
const [cart, setCart] = useState([0])
const [birdType, setBirdType] = useState("")

  return (
    <div id="body">
      <Cart
     cart = {cart}
     setCart = {setCart}
     birdtype = {birdType}
     setBirdType = {setBirdType}
      />
      <Checkout/>
      <Birds
      cart = {cart}
      setCart = {setCart}
      birdtype = {birdType}
     setBirdType = {setBirdType}
      />
      </div>
  );
};

export default App;
