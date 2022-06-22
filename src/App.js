import { React, useState } from "react";
import BirdCards from "./conponents/BirdCards";
import birds from "./data/birds";
import bonus from "./data/bonusItems";
import Cart from "./conponents/Cart";
import Checkout from "./conponents/Checkout";

import "./App.css";
const App = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <div className="container">
      <Cart
        cartData={cartData}
        setCartData={setCartData}
        bonusData={bonus}

      />
      <Checkout
        cartData={cartData}
        setCartData={setCartData}
      />
      <BirdCards
        birdData={birds}
        cartData={cartData}
        setCartData={setCartData}
      />
    </div>
  );
};

export default App;
