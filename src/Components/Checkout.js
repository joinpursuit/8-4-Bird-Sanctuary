import { useState } from "react";

const Checkout = ({setCart}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        if(firstName && lastName && email && zipCode){
            alert('You have adopted birds. Thank you!') 
            setCart([]);
            setEmail("");
            setFirstName("");
            setLastName("");
            setZipCode("");
        }else{
            alert('Fill out the whole form.')
            
        }
    }

    return (
        <form className = "Checkout" onSubmit={handleSubmit}>
            <h2>Checkout</h2>
            <label>
                First Name
                <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label>
                Last Name
                <input type='text'value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <label>
                Email
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Zip Code
                <input type='number'value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
            </label>
            <input type='submit'/>
        </form>
    )
}

export default Checkout;