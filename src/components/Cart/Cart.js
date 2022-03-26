import React from 'react';
import './Cart.css'

const Cart = () => {
    return (
        <div className='cart'>
            <h3>Selected Place</h3>

            <button className='btn-choosenOne'>Choose One</button>
            <button className='btn-choosenAgain'>Choose Again</button>
            
        </div>
    );
};

export default Cart;