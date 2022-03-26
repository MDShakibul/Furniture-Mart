import React from 'react';
import './Chooseplace.css'

const Chooseplace = (props) => {
    const {name, img} = props.place
    return (
        <div className='chooseplace'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default Chooseplace;