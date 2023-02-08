import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import styles from './dashboard.module';
import {Trophy} from "../../images/Trophy";

const DashboardForm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const checkUser = () => {
            // if (!localStorage.getItem("username")) {
            //     navigate("/");
            // }
        };
        checkUser();
    }, [navigate]);

    return (
        <div className={styles.dashboard}>
            <div className={styles.leftColumn}>
                <div className={styles.profile}>
                    <div className={styles.title}>My profile</div>
                    <div className={styles.user}>
                        <div className={styles.avatar}>
                            <img src="./public/images/avatar.jpg" alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>Christian Andersen</div>
                            <div className={styles.email}>christian.andersen@sport.cc</div>
                            <button className="button"><Trophy/> 10</button>
                            <button className="button button-secondary"><Trophy/> 0</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.box}>
                    Top and Flop
                </div>
            </div>
        </div>
    );
};

export default DashboardForm;
