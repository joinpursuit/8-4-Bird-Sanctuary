import React, { useState } from "react"
import "./App.css"
import birdData from "./data/birds";
import Birds from "./Components/Birds";
import Cart from "./Components/Cart";

const App = () => {
  const [totalAmount, setTotalAmount] = useState("0");
return (
  <div>
    <h1>Bird Sanctuary</h1>
    <Birds birds={birdData} setTotalAmount={setTotalAmount} totalAmount={totalAmount}/>
    <Cart totalAmount={totalAmount}  />
  </div>
)
}

export default App;
// asjdadoia
