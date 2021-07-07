import React from 'react'
import styles from "../Navbar/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={styles.container}>
             <nav className={styles.Navbar}>
                    <Link to="/"> Home </Link>
                    <Link to="products/:id"> Products </Link>
                    <Link to="/cart"> Cart </Link>
             </nav>
        </div>
    )
}

export default Navbar
