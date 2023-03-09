import React from "react";
import {useNavigate} from "react-router-dom";

import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import styles from './challenges.module';

const PickPlayer = () => {
    const navigate = useNavigate();
    return (
        <Tabs selectedTabClassName="selected">
            <div className="box mb15">
                <div className="boxTitle">
                    Wicketkeeper (WK)
                    <div className="backButton" onClick={() => navigate(-1)}>Back</div>
                </div>
                <TabList className="tabs">
                    <Tab className="tab">Top Players</Tab>
                    <Tab className="tab">Round Matches</Tab>
                </TabList>
            </div>
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
            </TabPanel>
            <TabPanel>
                round matches
            </TabPanel>
        </Tabs>
    );
};

export default PickPlayer;
