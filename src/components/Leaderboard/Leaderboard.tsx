import React from "react";

import styles from './leaderboard.module';
import classNames from "classnames";

const Leaderboard = () => {
    return (
        <>
            <div className="box">
                <div className="boxTitle bn">Leaderboard</div>
            </div>
            <div className={styles.item}>
                <div className={styles.avatar}>
                    <img src="/images/user.png" alt=""/>
                </div>
                <div className={styles.user}>
                    <div className={styles.name}>Maja Svensk</div>
                    <div>
                        <span>01</span> | Win: 9 | Lost: 1
                    </div>
                </div>
                <div className={styles.score}>
                    Season Points
                    <div className={styles.points}>2305.0</div>
                </div>
            </div>
            <div className={classNames(styles.item, styles.selected)}>
                <div className={styles.avatar}>
                    <img src="/images/user.png" alt=""/>
                </div>
                <div className={styles.user}>
                    <div className={styles.name}>You</div>
                    <div>
                        <span>02</span> | Win: 9 | Lost: 1
                    </div>
                </div>
                <div className={styles.score}>
                    Season Points
                    <div className={styles.points}>2305.0</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.avatar}>
                    <img src="/images/user.png" alt=""/>
                </div>
                <div className={styles.user}>
                    <div className={styles.name}>Thomas Andersen</div>
                    <div>
                        <span>03</span> | Win: 9 | Lost: 1
                    </div>
                </div>
                <div className={styles.score}>
                    Season Points
                    <div className={styles.points}>2305.0</div>
                </div>
            </div>
        </>
    );
};

export default Leaderboard;
