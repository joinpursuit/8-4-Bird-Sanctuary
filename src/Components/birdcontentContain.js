import birdData from "../data/birds";
import BirdContent from "./birdContent";

const BirdContentContain = (props) => {
  const { cartArray, setCartArray, birds } = props;
  return (
    <ul>
      {birds.map(({ name, amount, id, img }) => {
        return (
          <li key={id} className="bird">
            <BirdContent
              name={name}
              amount={amount}
              img={img}
              id={id}
              setCartArray={setCartArray}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default BirdContentContain;
