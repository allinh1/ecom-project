import { useEffect, useContext } from 'react'
import {CartContext} from '../../context/context'
import { deleteCartItem } from '../../services/cart'
import styles from './Cart.module.scss'
import Navbar from '../../components/Navbar/Navbar';
import CartCard from '../../components/CartCard/CartCard';


const Cart = () => {

    const { cart, getCartItems } = useContext(CartContext)

    const handleDelete = (CartId) =>{
        deleteCartItem(CartId)
        getCartItems();
    }

    useEffect(() => {
        getCartItems();
    },[cart])


    return (
        <>
            <Navbar />
                <div>
                    <h1>Cart</h1>
                </div>
                <div className={styles.CartContainer}>
                    <div className={styles.CartGrid}>
                    {cart.map((item) => {
                        return <CartCard key={item.id} product={item} onDelete={handleDelete}/>;
                    })} 
                    </div>
                </div>

        </>
    );
};

export default Cart;

