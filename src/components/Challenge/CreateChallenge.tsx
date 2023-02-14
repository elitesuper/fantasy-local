import React from "react";

import styles from './challenges.module';
import classNames from "classnames";
import {NavLink, useNavigate} from "react-router-dom";


const CreateChallenge = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="box">
                <div className="boxTitle">
                    Create a challenge
                    <div className={styles.backButton} onClick={() => navigate(-1)}>Back</div>
                </div>
                <div className="boxContent">
                    <div className={styles.tabs}>
                        <span className={classNames(styles.tab, styles.selected)}>Matches</span>
                        <span className={styles.tab}>Leagues</span>
                    </div>
                </div>
            </div>
            <div className={styles.matchesList}>
                <NavLink to={'/pickPlayers'} className={styles.challengeBox}>
                    <div className={styles.match}>
                        <div className={styles.team}>
                            <div className={styles.teamLogo}>
                                <img src="/images/team1.png" alt=""/>
                            </div>
                            <div>Islamaba United</div>
                        </div>
                        <div className={styles.time}>
                            <strong>Upcoming</strong>
                            <span>5h 14m</span>
                        </div>
                        <div className={styles.team}>
                            <div className={styles.teamLogo}>
                                <img src="/images/team2.png" alt=""/>
                            </div>
                            <div>Quetta Gladiators</div>
                        </div>
                    </div>
                    <div className={styles.oddsWrap}>
                        <div className={styles.partnerLogo}>
                            <img src="/images/betway.svg" alt="BetWay"/>
                        </div>
                        <div className={styles.odds}>
                            <div className={styles.item}>
                                1 <span>3.48</span>
                            </div>
                            <div className={styles.item}>
                                2 <span>1.45</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
                <NavLink to={'/pickPlayers'} className={styles.challengeBox}>
                    <div className={styles.match}>
                        <div className={styles.team}>
                            <div className={styles.teamLogo}>
                                <img src="/images/team1.png" alt=""/>
                            </div>
                            <div>Islamaba United</div>
                        </div>
                        <div className={styles.time}>
                            <strong>Upcoming</strong>
                            <span>5h 14m</span>
                        </div>
                        <div className={styles.team}>
                            <div className={styles.teamLogo}>
                                <img src="/images/team2.png" alt=""/>
                            </div>
                            <div>Quetta Gladiators</div>
                        </div>
                    </div>
                    <div className={styles.oddsWrap}>
                        <div className={styles.partnerLogo}>
                            <img src="/images/betway.svg" alt="BetWay"/>
                        </div>
                        <div className={styles.odds}>
                            <div className={styles.item}>
                                1 <span>3.48</span>
                            </div>
                            <div className={styles.item}>
                                2 <span>1.45</span>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </>
    );
};

export default CreateChallenge;
