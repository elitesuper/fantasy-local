import React from "react";

import {Cricket} from "../../images/Cricket";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './challenges.module';

const FindChallenges = () => {
    return (
        <Tabs selectedTabClassName="selected">
            <div className="box">
                <div className="boxTitle">Find Challenges</div>
                <TabList className="tabs">
                    <Tab className="tab">Privat</Tab>
                    <Tab className="tab">Open</Tab>
                </TabList>
            </div>
            <TabPanel>
                <div className={styles.challenge}>
                    <div className={styles.ball}>
                        <Cricket/>
                    </div>
                    <div className={styles.info}>
                        <strong>India vs. Australia in India Test Series</strong>
                        <div>Participants: Rene, Josip, Sandra, Thomas, …</div>
                        <small>Thursday at 05:00 - 06:00 I Create by: You</small>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                <div className={styles.noChallenges}>There's no challenges available</div>
            </TabPanel>
        </Tabs>
    );
};

export default FindChallenges;
