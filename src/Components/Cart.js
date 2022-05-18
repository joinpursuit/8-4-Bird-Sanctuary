import react from "react";
import { useState } from "react";

const Cart = ({ birds, totalAmount, nameArr, bonusItems,totalDiscount,setTotalDiscount,currentBonus }) => {
 

  const addBonusItem = () => {///where do i put this???
    //console.log(birds)

      if (totalAmount >= 100 && totalAmount < 300) {
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

  const addDiscount = () => {
    if (nameArr.length >= 3 ) {
      setTotalDiscount(10);
    }
  }

  return (
    <div className="Cart" >
           {/* <>{addBonusItem(totalAmount, bonusItems)}</> */}
      <h1>Cart</h1>
      
      {addDiscount()}
      <p>Discount: {totalDiscount}%</p>

      <h4>Total: ${totalAmount}</h4>
      <ol>
        {
        nameArr.map((name) => {
          for (let i = 0; i < birds.length; i++){
            if (name === birds[i].name ) {
              return <li>{name} ${birds[i].amount}</li>;
            }
          }
          
          
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
