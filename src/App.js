import React, { useState } from "react";
import Cart from "./Components/cart";
import CheckOut from "./Components/checkOut";
import birdData from "./data/birds";
import BirdContentContain from "./Components/birdcontentContain";

const App = () => {
  const [cartArray, setCartArray] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <div>
      <Cart cartArray={cartArray} result={result} />
      <BirdContentContain
        birds={birdData}
        result={setResult}
        setCartArray={setCartArray}
      />
      <CheckOut />
    </div>
  );
};

export default App;
