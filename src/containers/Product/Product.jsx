
// import { useParams } from "react-router-dom"
import React from 'react'
import { getProducts } from '../../services/product';

const Product = () => {
    const [product, setProduct] = useState();

    useEffect(() => {
        const getData = async () => {
            const data = await getProducts();
            setProduct(data)
        };
        getData();
    }, []);



    return (
        <>
            {product ? (
                <div>
                    <h1>
                        {product.name} {product.price}
                    </h1>
                </div>
            ) : (
                <p>Product with id: {id} does not exist</p>
            )};
        </>
    );
};

export default Product
