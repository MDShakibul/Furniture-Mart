import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Place.css'

const Place = (props) => {
    const {id, img, name, cost} = props.place
    const {handelAddToCart} = props;
    return (
        <div className='place'>
        <img src={img} alt="" />
        <div className="">
        <h3 className="">Place Name: {name}</h3>
        <p className="">Cost for Travelling: {cost} Taka</p>
        
        </div>
        <button className="btn-cart" onClick={() => handelAddToCart(props.place)}> 
          <div className='btn-align'>
          <p className="btn-text">Select</p>
          <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
          </div>
        </button>
        </div>
    );
};

export default Place;