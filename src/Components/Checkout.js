import { useState } from "react";

const Checkout = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");

  const handleSubmit = (event) => {
   
    if (firstName && lastName && email && zipCode) {
      alert("You have adopted birds. Thank you!");
    } else {
      alert("Fill out the whole form.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="Checkout">
      <h2>Checkout</h2>

      <label>
        First Name
        <input
          value={firstName}
          type="text"
          onChange={(event) => setFirstName(event.target.value)}
        />
      </label>
      <label>
        Last Name
        <input
          value={lastName}
          type="text"
          onChange={(event) => setLastName(event.target.value)}
        />
      </label>
      <label>
        Email
        <input
          value={email}
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Zip Code
        <input
          value={zipCode}
          type="number"
          onChange={(event) => setZipCode(event.target.value)}
        />
      </label>
      <input type="submit" />
    </form>
  );
};

export default Checkout;


