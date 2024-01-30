import React from 'react';

const Footer = () => {
    return (
        <div>
            <h1>Question & Answer </h1>
            <div>
                <h3>How React Works?</h3>
                <p>Answer: React depends on virtual dom which is a copy of actual dom. When there is a change it automaticaly compare virtual dom with the real dom and make the changes.</p>
            </div>
            <div>
                <h3>Difference between props and state</h3>
                <p>Answer: 1. Props are used to send data from parent to child component where state is used to amanged data within a component.
                    2.props cannot be changed while state can be changed.
                    3.props are read only and state is only accessible within the component.
                </p>
            </div>
            <div>
                <h3>Use of State?</h3>
                <p>useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.
                </p>
            </div>


        </div>
    );
};

export default Footer;