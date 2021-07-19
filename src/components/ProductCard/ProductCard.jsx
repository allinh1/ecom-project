import React from 'react'
import { useState, useEffect } from "react";
import { addToCart } from "../../services/cart";
import Counter from "../Counter/Counter";
import styles from './ProductCard.module.scss'



const ProductCard = ({product}) => {

    const [itemQuantity, setItemQuantity] = useState(0)
    const [ cartInfo, setCartInfo ] = useState(null)

    const handleClick = () => {
        addToCart(cartInfo);
    }

    useEffect(() => {
        const {...record} = product;
        setCartInfo({...record, quantity: itemQuantity});
    }, [product, itemQuantity])

    return (
        <div>

        <div className={styles.ProductCard_Container}>
            <img src='https://via.placeholder.com/150'></img>
                <div className={styles.Card_Content}>
                    <div>{product.id} {product.itemName}</div>
                    <div>{product.variant}</div>
                    <div>$ {product.price}</div>
                </div>
            <button onClick={handleClick}>Add to Cart</button>
            <Counter onChange={setItemQuantity} value={itemQuantity} />
        </div>

        </div>
    )
}

export default ProductCard