// import React from 'react';

export default function Cart(props) {
    const { name, price, cartObjects } = props;
    let total = 0;
    let discount = 10;
    let liItems = document.querySelectorAll("li").length + 1
    cartObjects.map(obj => total += obj.amount);

    if (cartObjects) {
        // console.log('there are cart items here');
        return (
            <ol>
                <h3 id='discount' className={liItems < 3 ? 'hidden' : 'visible'}>Discount: {discount} %</h3>
                <h3 className={total <= 0 ? 'hidden' : liItems >= 3 ? total = (total * .9) : total}>Total: {total}</h3>
            {cartObjects.map((el) => {
                return (
                <>
                    <li>{el.name} - ${el.amount}</li>
                </>)
            })}
            </ol>
        )
    } 
    console.log(name, price)
}