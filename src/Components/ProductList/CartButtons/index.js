import React, { useMemo } from 'react'
import AfterCart from './AfterCart';
import BeforeCart from './BeforeCart';
import { useSelector } from "react-redux";


const CardButtons = ({ product }) => {
    const { cartList } = useSelector((state) => state.cart);

    const cartCount = useMemo(() => {
        return cartList?.find((item) => item?.id === product?.id)?.count
    }, [cartList])


    return (
        <>
            {cartCount > 0 ? (
                <AfterCart productID={product?.id} cartCount={cartCount} />
            ) : (
                <BeforeCart product={product} />
            )}
        </>
    )
}

export default CardButtons