const Birds = ({ name, amount, img, id, cart, setCart }) => {
  return (
    <div className="birds">
      <h4>{name}</h4>
      <p>${amount}</p>
      <img src={img} alt={name} width="200px" />
      <br />
      <button value={id} onClick={() => setCart([...cart, { name, amount }])}>
        Adopt
      </button>
    </div>
  );
};

export default Birds;
