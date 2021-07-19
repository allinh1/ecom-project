import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
    return (
        <>
        <header id="nav-wrapper"></header>
            <div>
                <span class="gradient skew"><h1 class="logo un-skew"><a href="#home">Studio Shoes</a></h1></span>
                <button id="menu" class="btn-nav"><span class="fas fa-bars"></span></button>
            </div>

        </>
    )
}

export default Header
