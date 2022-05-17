import React from "react";
import Cart from "./Cart";
import { useState } from "react";

const Checkout = (props) => {
    const { setAdopt, setPrice } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !zipCode) {
      alert("Please complete form.");
    } else {
      alert("You have adopted birds. Thank you!");
      setAdopt([]);
      setPrice([]);
      setFirstName("");
      setLastName("");
      setEmail("");
      setZipCode("");
    }
    e.target.reset();
  };

  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <br />
          <input id="FirstName" name="FirstName" type="text" onChange={(e) => setFirstName(e.target.value)} value={ firstName }/>
        </label>
        <label>
          Last Name
          <br />
          <input id="LastName" name="LastName" type="text" onChange={(e) => setLastName(e.target.value)} value={ lastName }/>
        </label>
        <label>
          Email
          <br />
          <input id="Email" name="Email" type="email" onChange={(e) => setEmail(e.target.value)} value={ email }/>
        </label>
        <label>
          Zip Code
          <br />
          <input id="ZipCode" name="ZipCode" type="number" onChange={(e) => setZipCode(e.target.value)} value={ zipCode }/>
        </label>
        <input label="Submit" type="submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
