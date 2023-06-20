import React, { useState } from 'react'
import './ProductList.css';
import products from '../../Api/products.json'
import BeforeCart from './CartButtons/BeforeCart';
import AfterCart from './CartButtons/AfterCart';
import { useSelector } from "react-redux";
const ProductList = () => {

    const { cartCount } = useSelector((state) => state.cart);

    const [count, setCount] = useState(0);
    console.log('cart', cartCount);
    const addToCart = () => {
        setCount(1)
    }
    console.log("count", count);
    return (
        <section className='container'>
            {products.map((product, key) => {
                return (
                    <div className='product-container' key={key}>
                        <img src={product?.image} alt='' />
                        <h3>{product?.title}</h3>
                        {cartCount > 0 ? <AfterCart /> : <BeforeCart />}


                    </div>
                );
            })}
        </section>
    )
}

export default ProductList