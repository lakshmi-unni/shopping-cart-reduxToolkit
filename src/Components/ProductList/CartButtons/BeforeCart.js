import React from 'react'

import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/Cart'
import './CartButtons.css'
const BeforeCart = () => {

    const dispatch = useDispatch();
    return (
        <div className='before-cart'>
            <button className='add-cart-button' onClick={() => dispatch(addToCart())}>
                Add to Cart
            </button>
        </div>
    )
}

export default BeforeCart