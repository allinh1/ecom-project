import { useState , useEffect } from "react";
import { getProducts, addToCart, addProduct } from '../../services/product'

import React from 'react'
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '../../components/Grid';
import { CarouselImages } from '../../assets/CarouselImages';


const Home = () => {
    const [products, setProducts] = useState([]);
    const getData = async () => {
        const data = await getProducts();
        setProducts(data)
    };

    useEffect(() => {
        getData();
    }, []);

    const handleAddToCart = async (product) => {
        await addProduct(product);
        getData()
    };

    return (
        <>
            <Header />
            <Navbar />

            <Carousel slides={CarouselImages}/>
            
            <Grid />
            {products.map((product) => (
                <div key={products.id}>
                    <h2>{product.name}</h2>
                    <p>${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>
                        Add to Cart
                    </button>
                </div>
                ))}

            <Footer />
        </>
    )
}

export default Home

