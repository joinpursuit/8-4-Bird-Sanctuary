import React, { useState } from "react";
import "./App.css";
import birdData from "./data/birds";
import Birds from "./Components/Birds";
import Cart from "./Components/Cart";
import bonusItems from "./data/bonusItems";
import Checkout from "./Components/Checkout";

const App = () => {
  const [totalAmount, setTotalAmount] = useState("0");
  const [nameArr, setNameArr] = useState([]); //store name

  const [totalDiscount, setTotalDiscount] = useState(0);
  //state here -
  const [currentBonus, setCurrentBonus] = useState([]);

  return (
    <div>
      <h1>Bird Sanctuary</h1>
      <Birds
        birds={birdData}
        setTotalAmount={setTotalAmount}
        totalAmount={totalAmount}
        nameArr={nameArr}
        setNameArr={setNameArr}
        bonusItems={bonusItems}
        currentBonus={currentBonus}
        setCurrentBonus={setCurrentBonus}
      />
      <Cart
        birds={birdData}
        totalAmount={totalAmount}
        nameArr={nameArr}
        bonusItems={bonusItems}
        totalDiscount={totalDiscount}
        setTotalDiscount={setTotalDiscount}
        currentBonus={currentBonus}
      />
      <Checkout nameArr={nameArr} setNameArr={setNameArr} setTotalAmount={setTotalAmount} setTotalDiscount={setTotalDiscount} setCurrentBonus={setCurrentBonus}/>
    </div>
  );
};

export default App;
// asjdadoia
