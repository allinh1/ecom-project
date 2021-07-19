import React from 'react'
import styles from "../Navbar/Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <div className={styles.container}>
             <nav className={styles.Navbar}>
                    <Link className={styles.Navbar_item} to="/"> Home </Link>
                    <Link className={styles.Navbar_item} to="products/:id"> Products </Link>
                    <Link className={styles.Navbar_item} to="/cart"> Cart </Link>
             </nav>
        </div>
    )
}

export default Navbar
