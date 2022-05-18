import Birdcards from "./Components/Birdcards";
import birdData from "./data/birds";
import bonusItems from "./data/bonusItems";
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
 

  return (
    <div>
      <Birdcards birdData={birdData} cart={cart} setCart={setCart} />
      <Cart birdData={birdData} cart={cart} setCart={setCart} bonusItems={bonusItems}/>
      <Checkout cart={cart} setCart={setCart}/>
    </div>
  );
};
export default App;




//import {useState} from "react"
// import Birds from "./Components/Birdcard"
// import Cart from "./Components/Cart"
// import Checkout from "./Components/Checkout"
// const App = () => {
//   return (
//     <div>
//       <main>
//        <h1>Bird Sanctuary</h1>
//        <Cart></Cart>
//        <Checkout></Checkout>
//        <Birds></Birds>
//       </main>
//     </div>
//   );
// };

// export default App;
