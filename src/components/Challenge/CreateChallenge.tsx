import React from "react";

import styles from './challenges.module';
import classNames from "classnames";
import {NavLink} from "react-router-dom";

const CreateChallenge = () => {
    return (
        <>
            <div className="box">
                <div className="boxTitle">Create a Challenge</div>
                <div className="boxContent">
                    <div className={styles.tabs}>
                        <span className={classNames(styles.tab, styles.selected)}>Matches</span>
                        <span className={styles.tab}>Leagues</span>
                    </div>
                </div>
            </div>
            <div className={styles.list}>
                <NavLink to={'/pickPlayers'} className={styles.challenge}>
                    challenge matches
                </NavLink>
            </div>
        </>
    );
};

export default CreateChallenge;
