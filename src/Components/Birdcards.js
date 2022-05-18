import Birdcard from "./Birdcard";

const Birdcards = ({ birdData, cart, setCart }) => {
   

return birdData.map(({name, amount, id, img}) => {
        return (
            <div className="birds">
                <Birdcard name={name} amount={amount} id={id} img={img} cart={cart} setCart={setCart} />
            </div>
        )
    })
}

export default Birdcards;

