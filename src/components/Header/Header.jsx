import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
        <header id="nav-wrapper"></header>
            <div className={styles.nav_left}>
                <span class="gradient skew"><h1 class="logo un-skew"><a href="#home">Logo Here</a></h1></span>
                <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
            </div>

        </>
    )
}

export default Header
