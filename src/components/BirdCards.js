import React from 'react'
import BirdCard from './BirdCard'

const BirdCards = ({birdData, cartData, setCartData}) => {
  return(
  <div className = 'birds'>

    <BirdCard 
    birdData={birdData}
    // setTotal = {setTotal} 
    setCartData = {setCartData} 
    cartData ={cartData}
    />
  </div>
  )
}
export default BirdCards