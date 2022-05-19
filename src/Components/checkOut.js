import React from "react";
import { useState } from "react";
import Cart from "./cart";

const CheckOut = (props) => {
  const { setAdopt, setPrice } = props;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !email || !zipCode) {
      alert("Please complete the form");
    } else {
      alert("You have adopted birds. Thank you!");

      setAdopt([]);
      setPrice([]);
      setEmail("");
      setFirstName("");
      setLastName("");
      setZipCode("");

      event.target.reset();
    }
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <form onSubmit={handleSubmit}>
        <label>
          FirstName
          <br></br>
          <input
            type="text"
            id="firstName"
            placeholder="Your first name"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          ></input>
          <br></br>
          LastName
          <input
            type="text"
            id="lastName"
            placeholder="Your last name"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          ></input>
          <br></br>
          Email
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <br></br>
          Zip Code
          <input
            type="number"
            id="zipCode"
            name="zipcode"
            placeholder="Your Zipcode"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
          ></input>
          <br></br>
          <input type="submit" label="submit"></input>
        </label>
      </form>
    </div>
  );
};
export default CheckOut;
