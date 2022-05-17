import BirdsCards from "./data/BirdsCards";
import Checkout from "./data/Checkout";
import Cart from "./data/Cart";
import { useState } from "react";
import birdData from "./data/birds";

const App = () => {
  // const [adopt, setAdopt] = useState("");

  const [adopt, setAdopt] = useState([]); // destructuring the state at which the click of a button will add the name of the bird to the cart
  const [price, setPrice] = useState([]); // destructuring the state at which the click of a button will add the price of the bird to the cart
  // followed by importing components Cart, BirdsCards and Checkout and passing props into them!!
  return (
    <div>
      {/* <h1>Hello, world!</h1> */}
      <Cart adopt={adopt} price={price} />
      <BirdsCards birds={birdData} setAdopt={setAdopt} setPrice={setPrice} />
      <Checkout setAdopt={setAdopt} setPrice={setPrice} />
    </div>
  );
};

export default App;
