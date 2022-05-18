
import React, {useState} from 'react'

const Checkout = ({setCartData}) => {
  const [firstName, setFirstName]= useState('')
  const [lastName, setLastName]= useState('')
  const [email, setEmail]= useState('')
  const [zipCode, setZipCode]= useState('')



const handleSubmit = (event) => {
  event.preventDefault()
  //const {value} = event.target

  alert('You have adopted birds. Thank you!')
  reset()
  
}

const handleFirstName = (event) =>{
  const {value} = event.target
  setFirstName(value)
}

const handleLastName = (event) => {
  const {value} = event.target
  setLastName(value)
}

const handleEmail = (event) => {
  const {value} = event.target
 setEmail(value)
}

const handleZipCode = (event) => {
  const {value} = event.target
  setZipCode(value)
}

const reset = () => {
  setFirstName('')
  setLastName('')
  setEmail('')
  setZipCode('')
  setCartData([])
}
return(
  <form onSubmit={handleSubmit} className = 'Checkout'>
    <h3>Checkout</h3>
    <label>First Name <input type = 'text' value ={firstName} onChange ={handleFirstName} required/></label>
    <label>Last Name <input type = 'text'value ={lastName} onChange ={handleLastName} required/></label>
    <label>Email <input type ='email' value ={email} onChange ={handleEmail} required/></label>
    <label>Zip Code <input type = 'number'value ={zipCode} onChange ={handleZipCode} required/></label>
    <input type = 'submit' value ='SUBMIT'/>
  </form>
)
}

export default Checkout