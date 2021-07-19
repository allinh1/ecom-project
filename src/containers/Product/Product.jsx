import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getProductById } from '../../services/product';
import ProductCard from "../../components/ProductCard";

const Product = () => {

    const { id } = useParams();
    const [product, setProduct] = useState([]);

    const fetchItem = async() => {
        const data = await getProductById(id)
        setProduct(data);
    }

    useEffect(() =>{
      fetchItem();
    },[]);

    return (
        <>
        <div>
            {product.map((item) => {
                return <ProductCard key={item.id} product={item} />;
            })}
        </div>
        </>
    );
};

export default Product