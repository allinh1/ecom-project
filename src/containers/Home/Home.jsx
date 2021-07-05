import React from 'react'
import Navbar from '../../components/Navbar';
import Carousel from '../../components/Carousel'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Grid from '../../components/Grid';
import { CarouselImages } from '../../assets/CarouselImages';

const Home = () => {
    return (
        <>
            <Header />
            <Navbar />

            <Carousel slides={CarouselImages}/>
            <Grid />
            <Footer />
        </>
    )
}

export default Home
