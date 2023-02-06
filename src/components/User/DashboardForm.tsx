import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import styles from "./user.module";

const DashboardForm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("username")) {
                navigate("/");
            }
        };
        checkUser();
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem("username");
        navigate("/");
    };

    return (
        <div className={styles.dashboard}>
            <h2 style={{marginBottom: "30px"}}>Howdy, David</h2>
            <button className={styles.signOutBtn} onClick={handleSignOut}>
                SIGN OUT
            </button>
        </div>
    );
};

export default DashboardForm;
