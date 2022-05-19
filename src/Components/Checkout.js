import { useState } from "react";
//followed this
//https://github.com/joinpursuit/8.4-Lecture-Notes/blob/main/MODULE3/forms/forms-app/src/components/Form.js
const Checkout = ({setNameArr,nameArr, setTotalAmount, setTotalDiscount, setCurrentBonus}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleFirstName = (e) => {
    const { value } = e.target;
    setFirstName(value);
  };

  const handleLastName = (e) => {
    const { value } = e.target;
    setLastName(value);
  };

  const handleEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleZipCode = (e) => {
    const { value } = e.target;
    setZipCode(value);
  };

  const formReset = (e) => {
    setFirstName(" ");
    setLastName(" ");
    setEmail(" ");
    setZipCode(" ");
    setFirstName(" ");
    setNameArr([]);
    setTotalAmount("0");
    setTotalDiscount(0);
    setCurrentBonus([]);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have adopted birds. Thank you!");
    formReset();
  };

  return (
    <form onSubmit={handleSubmit} className="Checkout">
      <h3>Checkout</h3>
      <label>
        First Name{" "}
        <input
          type="text"
          value={firstName}
          onChange={handleFirstName}
          required
        />
      </label>
      <label>
        Last Name{" "}
        <input
          type="text"
          value={lastName}
          onChange={handleLastName}
          required
        />
      </label>
      <label>
        Email{" "}
        <input type="email" value={email} onChange={handleEmail} required />
      </label>
      <label>
        Zip Code{" "}
        <input
          type="number"
          value={zipCode}
          onChange={handleZipCode}
          required
        />
      </label>
      <input type="submit" value="SUBMIT" />
    </form>
  );
};

export default Checkout;
