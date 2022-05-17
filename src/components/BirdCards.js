import BirdCard from "./BirdCard";

const BirdCards = ({ birds, cart, setCart }) => {
  return (
    <ul>
      {birds.map(({ name, amount, id, img }) => {
        return (
          <li key={id} className="card">
            <BirdCard
              id={id}
              name={name}
              amount={amount}
              img={img}
              cart={cart}
              setCart={setCart}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BirdCards;
