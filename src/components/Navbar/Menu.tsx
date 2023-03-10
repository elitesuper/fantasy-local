import React from 'react';

import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {useAuth} from "../../contexts/AuthContext";

import styles from './navbar.module'

interface HeaderProps {
    page?: string;
}
const Menu = (props: HeaderProps) => {
    const userData = useAuth();
    return (
        <div className={classNames(`boxContent`, styles.menuLinks)}>
            <NavLink className={classNames(styles.menuItem, props.page === 'profile' ? styles.active : "")} to="/profile">
                My profile
            </NavLink>
            <NavLink className={classNames(styles.menuItem, props.page === 'rules' ? styles.active : "")} to="/rules">
                Point system
            </NavLink>
            <NavLink className={classNames(styles.menuItem, props.page === 'about' ? styles.active : "")} to="/about">
                About
            </NavLink>
            <NavLink className={classNames(styles.menuItem, props.page === 'terms' ? styles.active : "")} to="/terms">
                Terms & Conditions
            </NavLink>
            <div className={styles.menuItem} onClick={()=>userData.logout()}>
                Log out
            </div>
        </div>
    );
};

export default Menu;
