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

                    <div>
                    {cart.map((item) => {
                        return <CartCard key={item.id} product={item} onDelete={handleDelete}/>;
                    })} 
                    </div>
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