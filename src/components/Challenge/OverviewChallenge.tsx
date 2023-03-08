import React from "react";

import {useNavigate} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classNames from "classnames";

import {Gift} from "../../images/Gift";
import {Calendar} from "../../images/calendar";
import {Formation} from "../../images/formation";
import styles from './challenges.module';

const OverviewChallenge = () => {
    const navigate = useNavigate();

    return (
        <Tabs selectedTabClassName="selected">
            <div className="box mb15">
                <div className="boxTitle">
                    Challenge Overview
                    <div className={styles.backButton} onClick={() => navigate(-1)}>Back</div>
                </div>
            </div>
            <div className={styles.newChallenge}>
                <div className={styles.icon}>
                    <img src="image" />Image
                </div>
                <div>
                    <div>India Australia In India Test Series</div>
                    <div className={styles.status}>Private</div>
                </div>

            </div>
            <div className="box mb15">
                <TabList className="tabs">
                    <Tab className="tab">Info</Tab>
                    <Tab className="tab">Team</Tab>
                    <Tab className="tab">Challengers</Tab>
                </TabList>
            </div>
            <TabPanel>
                <div className={classNames(styles.challengeBox)}>
                    <div className={styles.icon}><Gift/></div>
                    <div className={styles.text}><strong>Stake</strong><br/>Loser(s) will pay for a trip to Lego House</div>
                </div>
                <div className={classNames(styles.challengeBox)}>
                    <div className={styles.icon}><Calendar/></div>
                    <div className={styles.text}><strong>Next Match In</strong><br/>5 days 22h 30min</div>
                </div>
                <div className={classNames(styles.challengeBox)}>
                    <div className={styles.icon}><Formation/></div>
                    <div className={styles.text}><strong>Formation</strong><br/>4 Players</div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={styles.player}>
                    <div className={styles.shirt}>
                        <img src={process.env.COMMON_BASE_URL} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Chris Jordan</div>
                        <div><span>WK</span> | Istanbul united</div>
                    </div>
                    <div className={styles.score}>
                        <div>Season Points</div>
                        <div className={styles.points}>2411.5</div>
                    </div>
                </div>
                <div className={styles.player}>
                    <div className={styles.shirt}>
                        <img src={process.env.COMMON_BASE_URL} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Chris Jordan</div>
                        <div><span>WK</span> | Istanbul united</div>
                    </div>
                    <div className={styles.score}>
                        <div>Season Points</div>
                        <div className={styles.points}>2411.5</div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={styles.player}>
                    <div className={styles.shirt}>
                        <img src={process.env.COMMON_BASE_URL} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Sandra Malchrowicz </div>
                        <div>You</div>
                    </div>
                    <div className={styles.score}>
                        <div>Points Earned</div>
                        <div className={styles.points}>0.0</div>
                    </div>
                </div>
                <div className={styles.player}>
                    <div className={styles.shirt}>
                        <img src={process.env.COMMON_BASE_URL} alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Maja Svensk</div>
                        <div><a href="#">Remove</a></div>
                    </div>
                    <div className={styles.score}>
                        <div>Points Earned</div>
                        <div className={styles.points}>0.0</div>
                    </div>
                </div>
            </TabPanel>
        </Tabs>
    );
};

export default OverviewChallenge;
