import React from "react";
import classNames from "classnames";

import styles from "./menu.module";


export default function Hamburger({ isOpen }) {
    return (
        <div className={classNames(styles.hamburger, isOpen ? styles.isOpen : '')}>
            <div className={classNames(styles.burger, styles.burger1)}/>
            <div className={classNames(styles.burger, styles.burger2)}/>
            <div className={classNames(styles.burger, styles.burger3)}/>
        </div>
    );
};
