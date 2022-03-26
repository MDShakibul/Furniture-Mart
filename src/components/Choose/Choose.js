import React from 'react';
import './Choose.css'

const Choose = (props) => {
    const {name, img} = props.product;
    return (
        <div className='choose'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Choose;