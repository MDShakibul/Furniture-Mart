import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {
    const { img, name, cost} = props.product;
    const {handelAddToCart} = props;
    return (
        <div className='product'>
        <img src={img} alt="" />
        <div className="">
        <h3 className="">Product Name: {name}</h3>
        <p className="">Price: {cost}</p>
        
        </div>
        <button className="btn-cart" onClick={() => handelAddToCart(props.product)}> 
          <div className='btn-align'>
          <p className="btn-text">Select</p>
          <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
          </div>
        </button>
        </div>
    );
};

export default Product;