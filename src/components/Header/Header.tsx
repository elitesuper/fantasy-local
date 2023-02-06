import React from "react";
import Menu from "../Menu/Menu";
import Search from "../Search/Search"
import logo from "../../../public/images/logo";
import styles from "./header.module";

const Header = () => {
    return (
        <>
            <div className={styles.container}>
                <Menu />
                <img src={logo} alt="FantasyWay"/>
                <Search />
                Notification
            </div>
        </>
    );
};

export default Header;
