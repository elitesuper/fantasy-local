import React from "react";

import styles from './topAndFlop.module';

const TopAndFlop = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.title}>Top and Flop</div>
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
                        <img src="images/asf.png" alt=""/>
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
                        <img src="images/asf.png" alt=""/>
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
                        <img src="images/asf.png" alt=""/>
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
