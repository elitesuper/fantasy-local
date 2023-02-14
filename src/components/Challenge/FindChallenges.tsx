import React from "react";

import styles from './challenges.module';
import classNames from "classnames";

const FindChallenges = () => {
    return (
        <>
            <div className="box">
                <div className="boxTitle">Find Challenges</div>
                <div className="boxContent">
                    <div className={styles.tabs}>
                        <span className={classNames(styles.tab, styles.selected)}>Privat</span>
                        <span className={styles.tab}>Open</span>
                    </div>
                </div>
            </div>
            <div className={styles.challenge}>
                <div className={styles.ball}>
                    cricket ball
                </div>
                <div className={styles.info}>
                    <strong>India vs. Australia in India Test Series</strong>
                    <div>Participants: Rene, Josip, Sandra, Thomas, …</div>
                    <small>Thursday at 05:00 - 06:00 I Create by: You</small>
                </div>
            </div>
        </>
    );
};

export default FindChallenges;
