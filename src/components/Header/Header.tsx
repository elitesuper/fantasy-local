import React from "react";
import logo from "../../../public/images/logo";
import styles from "./header.module";

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <img className={styles.logo} src={logo} alt="fantasy way"/>
            </div>
        </>
    );
};

export default Header;
