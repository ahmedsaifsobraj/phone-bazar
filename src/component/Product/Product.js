import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, picture, price } = props.product;
    return (
        <div className='product'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: {price}</p>
            <button onClick={() => props.addToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;