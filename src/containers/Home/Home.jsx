import { useState , useEffect } from "react";
import { getProducts } from '../../services/product'
import styles from './Home.module.scss'

import React from 'react'
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '../../components/Grid';
import Card from '../../components/Card';
import { CarouselImages } from '../../assets/CarouselImages';


// const Home = ({category=null}) => {

  const Home = () => {

    const [items, setItems] = useState([]);

    const getProductData = async () => {
      const data = await getProducts();
      setItems(data)
    };
  

    //   if (category){
    //     const filtered = data.filter((product) => {
    //       return product.category === category;
    //     })
    //     setItems(filtered);
    //   } else {
    //       setItems(data);
    //   }
    // };
  
    useEffect(() => {
      getProductData();
    },[]);
  

    return (
        <>
            <Header />
            <Navbar />
            <Carousel slides={CarouselImages}/>
            
            <div className={styles.Grid}>
                {items.map((product) => {
                    return <Card key={product.id} products={product}/>;
                })}
            </div>
    
            <Grid />
            <Footer />
        </>
    )
}

export default Home

