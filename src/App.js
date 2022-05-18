import React from "react";
import BirdCard from "./Components/BirdCards"
import birdData from "./data/birds"
import Cart from "./Components/Cart";

const App = () => {
  return (
    <div>
      <h1>Exotic Bird Adoption Agency</h1>
      <BirdCard birdData={birdData}/>
    </div>
);
};

export default App;
