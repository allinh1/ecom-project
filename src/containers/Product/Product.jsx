import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/product";
import ProductCard from "../../components/ProductCard";
import Card from "../../components/Card";
import Navbar from '../../components/Navbar';
import styles from './Product.module.scss'

const Product = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await getProductById(id);
      setItems(data);
    };
    getData();
  }, []);

  return (
    <>
        <Navbar />
        
        <div className={styles.item_container}>
            {items.map((product) => {
            return <Card key={product.id} products={product} />;
            })}
        </div>
    </>
  );
};

export default Product;


{/* <div className={styles.Grid}>
{items.map((product) => {
    return <Card key={product.id} products={product}/>;
})}
</div> */}