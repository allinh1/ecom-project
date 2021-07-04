import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import Counter from "../Counter";


const Card = (products, onDelete, onChange ) => {

    const [itemQuantity , setQuantitiy] = useState(products.itemQuantity || 0)


    // useEffect(() => {
    //     onChange({
    //         ...products,
    //         quantity: itemQuantity,
    //     });
    // }, [itemQuantity]);


     const handleDelete = (event) => {
         onDelete(products.id)
     };

    return (
        <>
            <div className={styles.Card}>

                <h2>{products.name}</h2>
                <h3>{products.price}</h3>

            </div>
            <button onClick={handleDelete}>Delete</button>

            <div>
                <Counter value={itemQuantity} onChange={setQuantitiy} />
            </div>

        </>
    );

};

export default Card