import React from "react";

import {NavLink, useNavigate} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classNames from "classnames";

import {Dinner} from "../../images/Dinner";
import styles from './challenges.module';

const CreateChallenge = () => {
    const navigate = useNavigate();
    return (
        <Tabs selectedTabClassName="selected">
            <div className="box">
                <div className="boxTitle">
                    Create a challenge
                    <div className={styles.backButton} onClick={() => navigate(-1)}>Back</div>
                </div>
                <TabList className="tabs">
                    <Tab className="tab">Matches</Tab>
                    <Tab className="tab">Leagues</Tab>
                </TabList>
            </div>
            <TabPanel className={styles.matchesList}>
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
            </TabPanel>
            <TabPanel className={styles.matchesList}>
                <NavLink to={'/selectRound'} className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}>Icon</div>
                    <div className={styles.text}><strong>Pakistan Super League</strong><br/>2023</div>
                </NavLink>
                <NavLink to={'/selectRound'} className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}>Icon</div>
                    <div className={styles.text}><strong>Pakistan Super League</strong><br/>2023</div>
                </NavLink>
                <NavLink to={'/selectRound'} className={classNames(styles.challengeBox, styles.stakesBox)}>
                    <div className={styles.icon}>Icon</div>
                    <div className={styles.text}><strong>Pakistan Super League</strong><br/>2023</div>
                </NavLink>
            </TabPanel>
        </Tabs>
    );
};

export default CreateChallenge;
