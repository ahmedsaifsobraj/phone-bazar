import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    let randomCart;
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (selectedProducts) => {
        const exist = cart.find(product => product.id === selectedProducts.id);
        let newCart;
        if (!exist) {
            selectedProducts.quantity = 1;
            newCart = [...cart, selectedProducts];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProducts.id);
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist];
        }

        setCart(newCart);

    }
    const randomProperty = (obj) => {
        var keys = Object.keys(obj);
        const random = (obj[keys[keys.length * Math.random() << 0]]);
        randomCart = [random];
        setCart(randomCart);

    }
    const chooseAgain = () => {
        const newCartAgain = [];
        setCart(newCartAgain);

    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>Selected Phones</h3>

                {
                    cart.map(product => <Cart product={product} ></Cart>)
                }
                <button onClick={() => randomProperty(cart)}>Choose 1 For me</button>
                <button onClick={() => chooseAgain()}>Choose Again</button>

            </div>
        </div>
    );
};

export default Shop;