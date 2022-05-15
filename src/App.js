import {useState} from "react"
import Birds from "./Components/Card"
import Cart from "./Components/Cart"
import Checkout from "./Components/Checkout"
const App = () => {
  return (
    <div>
      <main>
       <h1>Bird Sanctuary</h1>
       <Cart></Cart>
       <Checkout></Checkout>
      <Birds></Birds>
      </main>
    </div>
  );
};

export default App;
