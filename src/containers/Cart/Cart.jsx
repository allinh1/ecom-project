import { React, useState, useEffect } from 'react'
// import Counter from '../../components/Counter'
import { getCart, deleteCartItem, deleteItem } from '../../services/cart'
import styles from './Cart.module.scss'
import Navbar from '../../components/Navbar/Navbar';

const Cart = () => {
        const [cart, setCart] = useState([]);
        // const [itemQuantity , setQuantitiy] = useState()

        const getData = async () => {
            const data = await getCart();
            setCart(data);
        };

        useEffect(() => {
            getData();
        }, []);

        const handleDelete = async (id) => {
            await deleteCartItem(id)
            getData()
        };

        // const handleDelete = async (id) => {
        //     deleteCartItem(colleague.id);
        // };



        return (
            <>
                <Navbar />
                <div>
                    <h1>Cart</h1>
                </div>
                    {cart.map((product) => (
                        <div key={product.id} className={styles.cartProduct}>
                        <h4> id: {product.id} </h4>
                        <p>Product: {product.name}</p>
                        <o>Price: {product.price}</o>
                        <p>Type: {product.variant}</p>
                        <button onClick={() => handleDelete(product.id)}>Delete</button>
                        </div>
                    ))}
            </>
        );
};

export default Cart;




// <div className={styles.item}>
// {cart.map((product) => (
// <div key={product.id}>
//     <h4>
//     id: {product.id}
//     </h4>
//     <p>Product: {product.name}</p>
//     <p>Type: {product.variant}</p>

//     <button onClick={() => handleDelete(product.id)}>Delete</button>
//     {/* <Counter value={itemQuantity} onChange={setQuantitiy}/> */}
//     <br></br>
// </div>
// ))};

// </div>