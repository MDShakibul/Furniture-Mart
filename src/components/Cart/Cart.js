import React from 'react';
import Chooseplace from '../Chooseplace/Chooseplace';
import './Cart.css'

const Cart = ({cart, handleChooseAgain, handleChooseOne, chooseOne}) => {

    let choose_place = [];
    for (let place of cart) {
        choose_place.push(place);
    }


 
    
    
    return (
        <div className='cart'>
            <h3>Selected Place</h3>
            {
                choose_place.map(place => <Chooseplace key={place.id} place={place}></Chooseplace>)
            }
            <button className='btn-choosenOne' onClick={() => handleChooseOne()}>Choose One</button>
            <button className='btn-choosenAgain' onClick={() => handleChooseAgain()}>Choose Again</button>

            <div className='chooseplace'>
                <img src={chooseOne.img} alt="" />
                <p>{chooseOne.name}</p>
            </div>
            
        </div>
    );
};

export default Cart;