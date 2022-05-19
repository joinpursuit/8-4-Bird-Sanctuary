import birdData from "../data/birds";

// Each bird card displays the name, image, and amount (price)
const BirdContent = (props) => {
  const { name, amount, img, setCartArray } = props;

  const handleClick = (e) => {
    setCartArray((prevCartArray) => [...prevCartArray, `${name}  $${amount}`]);
  };

  return (
    <div className="birds">
      <h2>{name}</h2>
      <h3>${amount}</h3>
      <img src={img} alt={name} width="150px" />
      <br></br>
      <button onClick={handleClick}>Adopt</button>
    </div>
  );
};
export default BirdContent;
