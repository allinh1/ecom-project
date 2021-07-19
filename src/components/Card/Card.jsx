import { useEffect, useState } from "react";
import styles from "./Card.module.scss";
import { addToCart } from "../../services/cart";
import { Link } from 'react-router-dom'


const Card = ( {products} ) => {
  const [ cartRecord, setCartRecord ] = useState()

  const handleClick = () => {
      addToCart(cartRecord);
  }

  useEffect(() => {
      const {...record} = products;
      setCartRecord({...record, quantity: 1});
  }, [products])

  return (
    <div>
        <div className={styles.Card_Container}>
            <img src='https://via.placeholder.com/150'></img>
          <div className={styles.Card_Content}>
            <Link to={`/products/${products.id}`}>{products.name}</Link>
            <div>{products.variant}</div>
            <div>$ {products.price}</div>
          </div>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    </div>
)
}

export default Card
