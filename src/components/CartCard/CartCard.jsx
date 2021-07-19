import { useState, useEffect } from "react";
import Counter from "../Counter/Counter"
import { updateCartItem } from "../../services/cart";
import styles from './CartCard.module.scss'

const CartCard = ({ product, onDelete }) => {
    const [itemQuantity, setItemQuantity] = useState(1)

    const handleQuantityChange = async () => {
        await updateCartItem(product.CartId, {quantity: itemQuantity});
    }

    const handleDelete = (e) => {
        onDelete(product.CartId);
    };

    useEffect(() => {
        handleQuantityChange();
        // fetchQuantity();
    },[itemQuantity])

    return (
        <div className={styles.CartCard_Container}>
            <div className={styles.Card_Content}>
                <img src='https://via.placeholder.com/150'></img>
                <div>{product.name}</div>
                <div>{product.variant}</div>
                <div>${product.price}</div>
                <Counter onChange={setItemQuantity} value={itemQuantity}/>
                <button onClick={handleDelete}>REMOVE</button>
            </div>
        </div>

        )
    }
    
export default CartCard


    // const fetchQuantity = () => {
    //     setItemQuantity(product.quantity);
    // }