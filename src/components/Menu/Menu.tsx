import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import Hamburger from "./Hamburger";

import styles from "./menu.module";


export default function Menu() {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <nav className={styles.navigation}>
            <ul className={hamburgerOpen ? styles.showMenu : ''}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to="/register">Register</NavLink>
                </li>
                <li>
                    <NavLink to="/">Top and Flop</NavLink>
                </li>
                <li>
                    <NavLink to="/">Edit Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/">Change Pin</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact us</NavLink>
                </li>
                <li>
                    <NavLink to="/rules">Point System</NavLink>
                </li>
                <li>
                    <NavLink to="/">Terms and Conditions</NavLink>
                </li>
                <li>
                    <NavLink to="/">Log Out</NavLink>
                </li>
            </ul>

            <div className={styles.hamburger} onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div>
        </nav>
    );
};
