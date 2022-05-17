import react from "react";
import { useState } from "react";

const Cart = ({ totalAmount, nameArr, bonusItems }) => {
  const addBonusItem = (totalAmount, bonusItems) => {
    if (totalAmount >= 100 && totalAmount <= 300) {
      return <li>{bonusItems[0]}</li>;
    } else if (totalAmount >= 300 && totalAmount <= 500) {
      return (<li>{bonusItems[0]}</li>), (<li>{bonusItems[1]}</li>);
    } else if (totalAmount >= 500 && totalAmount <= 1000) {
      console.log(bonusItems[2]);
    } else if (totalAmount > 1000) {
      console.log(bonusItems[3]);
    }
  };

  const printstff = () => {
    console.log("asdadaihda");
  };

  return (
    <div className="Cart" onChange={printstff}>
      <h1>Cart</h1>
      <p>Discount: {"0"}</p>

      <p>Total: ${totalAmount}</p>
      <ol>
        {nameArr.map((name) => {
          return <li>{name}</li>;
        })}
      </ol>

      <ul>
        {/* {totalAmount >= 100 && totalAmount <= 300 ? <li>{bonusItems[0]}</li> : console.log('banna')  } */}
        {/* <li>{addBonusItem(totalAmount, bonusItems)}</li> */}
        {
            
            
        }
      </ul>
    </div>
  );
};

export default Cart;
