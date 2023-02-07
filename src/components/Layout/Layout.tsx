import React from "react";
import styles from "./layout.module";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
    return (
        <div className={styles.containerWrap}>
            <div className={styles.container}>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
