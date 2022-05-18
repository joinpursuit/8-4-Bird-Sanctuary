
  import React from "react";
  import { useState } from "react";
  

  
  export default function Checkout(props) {
    const { setCart, setTotal} = props;
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [zipCode, setZipCode] = useState("");
  
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!firstName || !lastName || !email || !zipCode) {
        alert("Please complete form");//This Pauses All
      } else {
        alert("You have adopted birds. Thank you!");//This Pauses All
        setCart([]);
        setTotal([]);
        setEmail("");
        setFirstName("");
        setLastName("");
        setZipCode("");
      }
    };
    return (
      <div className="checkout">
        <h4>Checkout</h4>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <br />
            <input 
            id="FirstName" 
            name="FirstName" 
            type="text" 
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}/>
          </label>
          <label>
            Last Name
            <br />
            <input 
            id="LastName" 
            name="LastName" 
            type="text" 
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}/>
          </label>
          <label>
            Email
            <br />
            <input 
            id="Email" 
            name="Email" 
            type="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}/>
          </label>
          <label>
            Zip Code
            <br />
            <input 
            id="ZipCode" 
            name="ZipCode" 
            type="number" 
            value={zipCode} 
            onChange={(event) => setZipCode(event.target.value)}/>
          </label>
          <input label="Submit" type="submit"></input>
        </form>
      </div>
    );
  };