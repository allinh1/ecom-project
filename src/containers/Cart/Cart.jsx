import { React, useState, useEffect } from 'react'
import Counter from '../../components/Counter'
import { getCart } from '../../services/cart'


const Cart = (item, onDelete) => {
        const [cartItem, setCartItem] = useState([]);
        const [itemQuantity , setQuantitiy] = useState(item.itemQuantity || 0)
        
        useEffect(() => {
          const getData = async () => {
            const data = await getCart();
            setCartItem(data);
            console.log(data);
        };
            getData();
        }, []);


        const handleDelete = (event) => {
            onDelete(item.id)
        };


    return (
        <>
        <div> Cart Page/Title </div>

        {cartItem.map((item) => (
        <div key={item.id}>
            <h4>{item.productId}</h4>
            <p>{item.quantity} {item.variant}</p>
        </div>
        ))}

        <div>
            <button onClick={handleDelete}>Delete</button>
        </div>

        <Counter value={itemQuantity} onChange={setQuantitiy}/>
        </>
    )
}

export default Cart;







// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getColleague } from "../../services/colleagues";

// const Cart = () => {
//     const { id } = useParams();
//     const [colleague, setColleague] = useState(undefined);

//     useEffect(() => {
//         const getData = async () => {
//             const data = await getColleague(id);
//             setColleague(data);
//         };

//         getData();
//     }, []);

//     return (
//         <>
//             {colleague ? (
//                 <div>
//                     <h1>
//                         {colleague.firstName} {colleague.lastName}
//                     </h1>
//                 </div>
//             ) : (
//                 <p>
//                     Colleague with id ={">"} {id} does not exist
//                 </p>
//             )}
//         </>
//     );
// };

// export default Cart;
