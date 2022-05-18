import React from 'react'

const Cart = ({cartData, bonusItems, setCartData}) =>{
  
  
  let discount = 0
  
  if(cartData.length >= 3){
    discount = 10
  }else{
    discount = 0 
  }

  const beginningTotal = cartData.map((item)=>item.amount)
  .reduce((a,b)=> {return a+ b},0)

  const total = beginningTotal - (beginningTotal * (discount/100))

  const bonus = () =>{
    if(total >= 100 && total < 300){
      return <li>{bonusItems[0]}</li>
    }else if(total >= 1000){
      return(
        <>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
        <li>{bonusItems[3]}</li>
        </>
      )
    }else if(total >= 500){
      return( 
      <>
        <li>{bonusItems[0]}</li>
        <li>{bonusItems[1]}</li>
        <li>{bonusItems[2]}</li>
    </>
      )
    }else if(total >= 300){
     return( <>
            <li>{bonusItems[0]}</li>
            <li>{bonusItems[1]}</li>
     </>
     )
  }
}
const handleDelete = (e) =>{
  const {value} = e.target
  const newone = cartData.filter((bird, i)=>i === value)
  setCartData(newone)
    console.log(value, newone)
}
  // setCartData([...cartData])


return(
  <article className='Cart'>
{/* 
- When there are less than 3 birds in the cart there is a 0% discount
- When there are 3 or more birds in the cart there is a 10% discount */}
    <h3>Cart</h3>
    <p>Discount: {discount}% </p>
    <h4>Total: ${total}
    </h4>
    <ol>
      {cartData.map((item, i)=>{
        return(
        <>
        <li key ={i}>{item.name} ${item.amount} <button value = {i} onClick ={handleDelete}>X</button></li>
        
        </>
        )
      })
      }
      
    </ol>
    <p>Your adoption has qualified you for the following bonus!</p>
    <ul>
      {bonus()}
    </ul>

  </article>

)
}
export default Cart