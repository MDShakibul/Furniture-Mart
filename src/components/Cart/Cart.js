import React from 'react';
import Choose from '../Choose/Choose';
import './Cart.css'

const Cart = ({cart, handleChooseAgain, handleChooseOne, chooseOne}) => {

    let choose_product = [];
    for (let product of cart) {
        choose_product.push(product);
    }


 
    
    
    return (
        <div className='cart'>
            <h3>Selected Product</h3>
            {
                choose_product.map(product => <Choose key={product.id} product={product}></Choose>)
            }
            <button className='btn-choosenOne' onClick={() => handleChooseOne()}>Choose One</button>
            <button className='btn-choosenAgain' onClick={() => handleChooseAgain()}>Choose Again</button>

            <div className='choose'>
                <img src={chooseOne.img} alt="" />
                <p>{chooseOne.name}</p>
            </div>
            
        </div>
    );
};

export default Cart;