import React from "react";

import {NavLink, useNavigate} from "react-router-dom";

import classNames from "classnames";
import styles from './challenges.module';

const SelectRound = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="box mb15">
                <div className="boxTitle">
                    Select a Round
                    <div className="backButton" onClick={() => navigate(-1)}>Back</div>
                </div>
            </div>
            <NavLink to={'/field'} className={classNames(styles.challengeBox, styles.stakesBox, styles.fullBox)}>
                <div><strong>Next Round</strong></div>
                <div>7 Matches - 2023</div>
            </NavLink>
            <NavLink to={'/field'} className={classNames(styles.challengeBox, styles.stakesBox, styles.fullBox)}>
                <div><strong>Today's matches</strong></div>
                <div>1 match</div>
            </NavLink>
            <NavLink to={'/field'} className={classNames(styles.challengeBox, styles.stakesBox, styles.fullBox)}>
                <div><strong>Single matches</strong></div>
                <div>Only 4-player Formation</div>
            </NavLink>
        </>
    );
};

export default SelectRound;
