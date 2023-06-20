import React, { useState } from 'react'
import './ProductList.css';
import products from '../../Api/products.json'
import BeforeCart from './CartButtons/BeforeCart';
import AfterCart from './CartButtons/AfterCart';
import { useSelector } from "react-redux";
import CardButtons from './CartButtons';
const ProductList = () => {

    const { cartCount, cartList } = useSelector((state) => state.cart);


    console.log("cartList", cartList);
    return (
        <section className='container'>
            {products.map((product, key) => {
                return (
                    <div className='product-container' key={key}>
                        <img src={product?.image} alt='' />
                        <h3>{product?.title}</h3>
                        <CardButtons product={product} />

                    </div>
                );
            })}
        </section>
    )
}

export default ProductList