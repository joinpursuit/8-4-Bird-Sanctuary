import React from "react";
import Card from "./Card";
import Cart from "./Cart";

const Birds = ({
  birds,
  setTotalAmount,
  totalAmount,
  setNameArr,
  bonusItems,
  currentBonus,
  nameArr,
}) => {
  return (
    <ul>
      {birds.map(({ id, name, amount, img }) => {
        return (
          <li key={id} className="card birds">
            <Card
              name={name}
              amount={amount}
              img={img}
              setTotalAmount={setTotalAmount}
              totalAmount={totalAmount}
              setNameArr={setNameArr}
              bonusItems={bonusItems}
              currentBonus={currentBonus}
              nameArr={nameArr}
            />

            {}
            {}
          </li>
        );
      })}
    </ul>
  );
};

export default Birds;