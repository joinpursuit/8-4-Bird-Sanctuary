import BirdCard from "./BirdCard";

const BirdCards = ({ birdData, cart, setCart }) => {
  return birdData.map(({ name, amount, id, img }) => {
    return (
      <div className="card">
        <BirdCard
          name={name}
          amount={amount}
          id={id}
          img={img}
          cart={cart}
          setCart={setCart}
        />
      </div>
    );
  });
};

export default BirdCards;
