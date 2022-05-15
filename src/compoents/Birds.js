import React from "react";
import Card from "./Card";

const Birds = ({ birds }) => {
  return (
    <ul>
      {birds.map(({id,name,amount,img}) => {
        return (
          <li key={id} className="card">
            <Card name={name} amount={amount} img={img}/>
          </li>
        );
      })}
    </ul>
  );
};

export default Birds;