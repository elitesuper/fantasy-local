import React, {useEffect, useState} from "react";

import styles from './topAndFlop.module';

const TopAndFlop = () => {
    const apiKey = process.env.REACT_APP_COMMON_BASE_URL

    const AsyncAwait = () => {
        const [users, setUsers] = useState([])

        const fetchData = async () => {
            const response = await fetch(apiKey + "/api/cricketmatches/top-and-flop")
            const data = await response.json()
            setUsers(data)

        }
        useEffect(() => {
            fetchData()
        }, [])
    }

    return (
        <>
            <div className="box">
                <div className="boxTitle">Top and Flop</div>
                <div className={styles.tabs}>
                    <div>WK</div>
                    <div>BW</div>
                    <div>BT</div>
                    <div>AR</div>
                </div>
            </div>
            <div className={styles.list}>
                <div className={styles.item}>
                    <div className={styles.shirt}>
                        <img src="/images/shirt.png" alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Chris Jordan</div>
                        <div><span>WK</span> | Istanbul United</div>
                    </div>
                    <div className={styles.score}>
                        <div>Season Points</div>
                        <div className={styles.points}>2411.5</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.shirt}>
                        <img src="/images/shirt.png" alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Chris Jordan</div>
                        <div><span>WK</span> | Istanbul United</div>
                    </div>
                    <div className={styles.score}>
                        <div>Season Points</div>
                        <div className={styles.points}>2411.5</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.shirt}>
                        <img src="/images/shirt.png" alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Chris Jordan</div>
                        <div><span>WK</span> | Istanbul United</div>
                    </div>
                    <div className={styles.score}>
                        <div>Season Points</div>
                        <div className={styles.points}>2411.5</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopAndFlop;
