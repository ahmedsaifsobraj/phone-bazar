import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { picture, name } = props.product;

    return (

        <div className='cart'>
            <img src={picture} alt="" />
            <p><small>{name}</small></p>
            {/* <h3>We choose {randomCart.name} for you.</h3> */}
        </div>
    );
};

export default Cart;