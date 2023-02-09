import React from "react";
import classNames from "classnames";
import NavBar from "../Navbar/Navbar";
import {NavLink} from "react-router-dom";

import { Logo } from '../../images/Logo';
import styles from './header.module';

interface HeaderProps {
    position?: string;
    hasMenu?: boolean;
    page?: string;
}

const Header = (props: HeaderProps) => {
    return (
        <>
            <div className={classNames(styles.container, `${styles[props.position]}`)}>
                <NavLink to="/" className={styles.logo}>
                    <Logo/>
                </NavLink>
                {props.hasMenu && (
                    <NavBar pageData={props.page}/>
                )}
            </div>
        </>
    );
};

export default Header;
