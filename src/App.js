import { useState } from 'react';
import birdData from './data/birds';
import BirdContainer from './components/BirdContainer';
import Cart from './components/Cart';
import Checkout from './components/Checkout'


const App = () => {
  const [name, setAnimalName] = useState("");
  const [price, setAmount] = useState("");
  const [cartObjects, setCart] = useState([])

  return (
    <>
      <h1>Bird Sanctuary</h1>
      <main id='card'>
        {birdData.map(el =>{
          return (<BirdContainer 
          name={el.name}
          image={el.img}
          amount={el.amount}
          id={el.id}
          setAnimalName={setAnimalName}
          setAmount={setAmount}
          cartObjects={cartObjects}
          />)
        })}
      </main>
      <div id='cart'> 
      <h2>Cart</h2>
        <Cart name={name} price={price} cartObjects={cartObjects} setCart={setCart}/>
      </div>
      <div id='checkoutInfo'>
        <h2>Checkout</h2>
        <Checkout setCart={setCart}/>
      </div>
      
    </>
  );
};

export default App;
