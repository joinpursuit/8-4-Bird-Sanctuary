import { useState } from "react";

const Checkout = ({cart, setCart}) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [zipCode, setZipCode] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(firstName && lastName && email && zipCode && cart.length > 0){
            alert('You have adopted birds. Thank you!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setZipCode('');
            setCart([]);
        }else{
            alert('Fill out the whole form!')
        }
    }

    return (
        <form onSubmit={handleSubmit} className='Checkout'>
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
                <input type='text' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Zip Code
                <input type='text'value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
            </label>
            <input type='submit'/>
        </form>
    )
}

export default Checkout;