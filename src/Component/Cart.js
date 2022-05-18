

import React from 'react';

const Cart =({ cart, setCart }) => {
    let cartTotal = cart.reduce((total, item) => total + item.amount, 0);

    let discount;

    if (cart.length < 3) {
        discount = 0;
    } else {
        discount = 10;
    }

    const birdClick = (e) => {
        const deleteItem = e.target.getAttribute('delete');

        setCart(cart.filter((item) => item.delete === cart));
    };

    return (
        <div>
            <h2>Cart</h2>
            <h4>Discount: {discount}%</h4>
            <h4>Total: ${cartTotal}</h4>
            <ol>
                {cart.map((item) => {
                    return (
                        <li key={item.id}>
                            {item.name}: ${item.amount.toFixed(2)}{' '}
                            <button id="delete" onClick={birdClick}>
                                Delete
                            </button>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default Cart;