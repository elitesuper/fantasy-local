import React from "react";
import Player from "./Player";
import classNames from "classnames";

import styles from './challenge.module';

const teamSize = 'team4';

const Challenge = () => {
    return (
        <div className={styles.fieldContainer}>
            <div className={styles.tabs}>
                <div className={styles.tab}>4</div>
                <div className={styles.tab}>8</div>
                <div className={styles.tab}>11</div>
            </div>
            <div className={classNames(styles.field, styles.team11)}>
                <div className={styles.playerPos}>
                    <Player position="WK"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR"/>
                </div>
            </div>
        </div>
    );
};

export default Challenge;
