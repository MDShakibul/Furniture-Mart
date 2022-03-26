import React from 'react';
import './Theory.css'

const Theory = () => {
    return (
        <div >
            <div className='theory_container'>
            <h3>How Reacts Works?</h3>
            <p>Answer: React use Diffing algorithm. It works in a declarative way. It mainly works by creating Virtual DOM. Virtual DOM means when project start then react made exactly the same kind of Main Dom. When any changing on code then react compare between Virtual Dom and Main Dom. Then react only change this part where code was changing. So it make it more dynamic. It creates DOM by rendering tree. It interacts with components by passing value from one to another.</p>
            </div>

            <h3>Difference between props and state</h3>
            <h4>Props</h4>
            <li>It's immutable. </li>
            <li>It's read only.</li>
            <li>Can be connected with multiple components</li>
            <li>Passes data from one component to another. </li>
            <li>Get data as object. </li>
            
            <h4>State</h4>
            <li>It’s mutable. </li>
            <li>It changes in asynchronous way</li>
            <li>It’s not sharable with other components</li>
            <li>Can store data. </li>
            <li>It’s not read only, can be changed. </li>
            

        </div>
    );
};

export default Theory;