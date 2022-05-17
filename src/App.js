import React, { useState } from "react"
import "./App.css"
import birdData from "./data/birds";
import Birds from "./Components/Birds";
import Cart from "./Components/Cart";
import bonusItems from "./data/bonusItems";

const App = () => {
  const [totalAmount, setTotalAmount] = useState("0");
  const [nameArr, setNameArr] = useState([]);//store name
  //store price?

return (
  <div>
    <h1>Bird Sanctuary</h1>
    <Birds birds={birdData} setTotalAmount={setTotalAmount} totalAmount={totalAmount} setNameArr={setNameArr} bonusItems={bonusItems}/>
    <Cart totalAmount={totalAmount} nameArr={nameArr} bonusItems={bonusItems}/>
  </div>
)
}

export default App;
// asjdadoia
