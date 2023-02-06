import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">challenges</NavLink>
                </li>
                <li>
                    <NavLink to="/about">live sports</NavLink>
                </li>
                <li>
                    <NavLink to="/feed">feed</NavLink>
                </li>
                <li>
                    <NavLink to="/">play for real</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
