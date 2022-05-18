import React from 'react';

const BirdContainer = (props) => {
    const { name, image, amount, id, setAnimalName, setAmount, cartObjects } = props;
    // console.log(cartObjects)

    const animalChosen = (el) => {
        el.preventDefault();
        console.log(name)
        setAnimalName(name);
        setAmount(amount);
        if (name || amount){
            cartObjects.push({ name : name , amount : amount });
        }
    }

   return (
        <>
            <div className='birds'>
                <h3>{name}</h3>
                <p>Price: ${amount}</p>
                <img src={image} alt={name} />
                <br />
                <button id={id} className={name} onClick={animalChosen}>Adopt Me</button>
            </div>
        </>
    );
}    

export default BirdContainer;