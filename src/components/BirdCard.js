import React from "react";

const BirdCard = ({ birdData, cartData, setCartData}) => {
  

  return (
    <>
      {birdData.map(({id, name, img, amount}) => {
        return (
          <section className="card" key={id}>
            <h3>{name}</h3>
            <img src={img} alt = {name}/>
            <p>Price: ${amount}</p>
            <button onClick = {()=>{
              if(!cartData.find((bird)=>bird.id === id)){
              setCartData([...cartData,{name, amount, id}])}
              // if(cartData.find((bird)=>bird.id === id)){
              //   setCartData(cartData.filter((bird)=>bird.id !== id
              //   ))
              // }else{
              //   setCartData([...cartData,{name, amount, id}])
              // }
            }}>ADOPT</button>
          </section>
        );
      })}
    </>
  );
};

export default BirdCard;
