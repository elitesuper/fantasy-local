import React from "react";

import {useNavigate} from "react-router-dom";
import {Dinner} from "../../images/Dinner";
import {Crown} from "../../images/Crown";
import {Drink} from "../../images/Drink";
import {Car} from "../../images/Car";
import {Ticket} from "../../images/Ticket";
import {Gift} from "../../images/Gift";

import styles from './challenges.module';
import classNames from "classnames";

const Stakes = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="box">
                <div className="boxTitle">
                    What's at stake?
                    <div className="backButton" onClick={() => navigate(-1)}>Back</div>
                </div>
            </div>
            <div className={styles.matchesList}>
                <div className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}><Dinner/></div>
                    <div className={styles.text}>Loser (s) will pay the dinner for all</div>
                </div>
                <div className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}><Crown/></div>
                    <div className={styles.text}>Losers (s) will post winners (s) at kings of his Facebook wall</div>
                </div>
                <div className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}><Drink/></div>
                    <div className={styles.text}>The loser (s) have to pay all drinks to the winner (s), next time they go out</div>
                </div>
                <div className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}><Car/></div>
                    <div className={styles.text}>The loser (s) have to be a taxi driver to the winner for one day</div>
                </div>
                <div className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}><Ticket/></div>
                    <div className={styles.text}>The loser (s) have to pay the tickets to the winner for the next cricket match</div>
                </div>
                <div className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}><Gift/></div>
                    <div className={styles.text}>Add your own challenge</div>
                </div>
            </div>
        </>
    );
};

export default Stakes;
