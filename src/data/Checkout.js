import React from "react";
import Cart from "./Cart";

const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    e.target.reset();
  };
  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <br />
          <input id="First Name" name="First Name" type="text" />
        </label>
        <label>
          Last Name
          <br />
          <input id="Last Name" name="Last Name" type="text" />
        </label>
        <label>
          Email
          <br />
          <input id="Email" name="Email" type="email" />
        </label>
        <label>
          Zip Code
          <br />
          <input id="Zip Code" name="Zip Code" type="number" />
        </label>
        <input label="Submit" type="submit"></input>
      </form>
    </div>
  );
};

export default Checkout;
