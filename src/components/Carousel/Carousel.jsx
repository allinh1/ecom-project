import { CarouselImages } from "../../assets/CarouselImages";
import { useState } from "react"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import styles from './Carousel.module.scss' 

const Carousel = ({ slides }) => {
const [current, setCurrent] = useState(0)
const length = slides.length;

const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
}

const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
}

// Slide length , reset.
if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
}
    return (
        <div className={styles.slider}>
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide}/>
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide}/>

            {CarouselImages.map((slide, index) => {
                    return (
                        <div className={index === current ? 'slide active' : 'slide'} 
                        key={index}>
                        {index === current && (
                            <img src={slide.image} alt="shoe images" className={styles.images}/>)}
                        </div>
                    )

                })};
        </div>
    );
};

export default Carousel ;  