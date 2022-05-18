import react from "react";
import { useState } from "react";

const Cart = ({ totalAmount, nameArr, bonusItems,totalDiscount,setTotalDiscount,currentBonus }) => {
 

  const addBonusItem = () => {///where do i put this???
    
      if (totalAmount >= 100 && totalAmount <= 300) {
        return (<li>{bonusItems[0]}</li>)
      } else if (totalAmount >= 300 && totalAmount <= 500) {
      return ( 
      <>
      <li>{bonusItems[0]}</li>
      <li>{bonusItems[1]}</li>
      </>)
      } else if (totalAmount >= 500 && totalAmount <= 1000) {
        return ( 
          <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
          </>)
      }  else if (totalAmount > 1000) {
        return ( 
          <>
          <li>{bonusItems[0]}</li>
          <li>{bonusItems[1]}</li>
          <li>{bonusItems[2]}</li>
          <li>{bonusItems[3]}</li>
          </>) 
      }

    // if (totalAmount >= 100 && totalAmount <= 300) {
    //   setCurrentBonus(prev => [...prev, bonusItems[0]])
    // } else if (totalAmount >= 300 && totalAmount <= 500) {
    //   setCurrentBonus(prev => [...prev, bonusItems[1]])
    // } else if (totalAmount >= 500 && totalAmount <= 1000) {
    //   setCurrentBonus(prev => [...prev, bonusItems[2]])
    // } else if (totalAmount > 1000) {
    //   setCurrentBonus(prev => [...prev, bonusItems[3]])
    // } else {
    //   console.log("stop")
    // }

  };

  return (
    <div className="Cart" >
           {/* <>{addBonusItem(totalAmount, bonusItems)}</> */}
      <h1>Cart</h1>
      <p>Discount: {totalDiscount}%</p>

      <h4>Total: ${totalAmount}</h4>
      <ol>
        {
        nameArr.map((name) => {
          return <li>{name}</li>;
        })
        }
      </ol>

      <ul>
        {/* {totalAmount >= 100 && totalAmount <= 300 ? <li>{bonusItems[0]}</li> : console.log('banna')  } */}
        {/* <li>{addBonusItem(totalAmount, bonusItems)}</li> */}
       
    
        {addBonusItem()}
            {/* {
            currentBonus.map((item) => {
                return <li>{item}</li>;
            })
        } */}
      </ul>
    </div>
  );
};

export default Cart;
