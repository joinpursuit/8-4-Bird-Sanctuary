export default function Checkout( prop ){
    const { setCart } = prop
    console.log(setCart)
    const onSubmit = (e) => {
        e.preventDefault();
        alert("You have adopted birds. Thank you!");
        document.getElementById('checkOut').reset();
        setCart([]);
        document.getElementById('discount').setAttribute('class', 'hidden');
    }

    return (
        <>
        <form id='checkOut' onSubmit={onSubmit}>
        <label>First Name</label>
        <input type='text' id='firstName' required></input>
        <label>Last Name</label>
        <input type='text' id='lastName'required></input>
        <label>Email</label>
        <input type='email' required></input>
        <label>Zipcode</label>
        <input type='number' className='zip' id="zip" required></input>
        <br/>
        <button type='submit'>submit</button>
        </form>
        </>
    )
}