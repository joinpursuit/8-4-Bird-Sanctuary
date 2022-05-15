import birdData from "../data/birds";
const Birds = (props) => {
  return birdData.map((bird) => {
    return (
      <div className="card">
        <h4>{bird.name}</h4>
        <p>Price: ${bird.amount}</p>
        <img src={bird.img} alt={bird.name} width='200px' />
        <br></br>
        <button >ADOPT</button>
      </div>
    );
  });
};
export default Birds;
