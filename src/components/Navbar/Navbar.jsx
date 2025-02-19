import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../components/Navbar/Navbar.module.css"

export const Navbar = () => {
    return (
        <nav className={styles.Nav}>
            <Link className={styles.navitem} to="/" >Proyectos</Link>
            <Link className={styles.navitem} to="/info">Info</Link>
        </nav>
    )
}
