import React, {useEffect, useState} from "react";

import {Cricket} from "../../images/Cricket";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import styles from './challenges.module';
import {ChallengesService} from "../../services/challenges.service";
import {AuthService} from "../../services/auth.service";
import {ChallengeData} from "../../models/challenge/challenge-data";

const FindChallenges = () => {
    const [privateChallenges, setPrivateChallenges] = useState([]);
    const [openChallenges, setOpenChallenges] = useState([]);
    const fetchPrivateData = async () => {
        ChallengesService.shared.findChallenge({userId: AuthService.shared.getUser()?.userInfo?.userID, challengePrivacy: true, pageSize: 10, pageIndex:1}).then(
            response => {
                setPrivateChallenges(response.data.data?.challenges??[]);
            },
            error => {
                console.log(error)
            }
        );
    }
    const fetchOpenData = async () => {
        ChallengesService.shared.findChallenge({userId: AuthService.shared.getUser()?.userInfo?.userID, challengePrivacy: false, pageSize: 10, pageIndex:1}).then(
            response => {
                setOpenChallenges(response.data.data?.challenges??[]);
            },
            error => {
                console.log(error)
            }
        );
    }
    useEffect(() => {
        fetchPrivateData();
        fetchOpenData();
    }, [])

    return (
        <Tabs selectedTabClassName="selected">
            <div className="box">
                <div className="boxTitle">Find Challenges</div>
                <TabList className="tabs">
                    <Tab className="tab">Private</Tab>
                    <Tab className="tab">Open</Tab>
                </TabList>
            </div>
            <TabPanel>
                {!privateChallenges?.length ? <div className={styles.noChallenges}>There's no challenges available</div> : ''}
                {privateChallenges.map((item:ChallengeData) =>
                    <div className={styles.challenge} key={item.userId}>
                        <div className={styles.ball}>
                            <Cricket/>
                        </div>
                        <div className={styles.info}>
                            <strong>{item.challengeName}</strong>
                            <div>Participants:
                                {item?.challengers?.map((challenger: any) =>
                                    <span key={challenger?.userId}>{challenger?.userName}, </span>
                                )}
                            </div>
                            <small>{item.challengeDateTime} | Create by: {item.creatorName}</small>
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel>
                {!openChallenges?.length ? <div className={styles.noChallenges}>There's no challenges available</div> : ''}
                {openChallenges.map((item:ChallengeData) =>
                    <div className={styles.challenge} key={item.userId}>
                        <div className={styles.ball}>
                            <Cricket/>
                        </div>
                        <div className={styles.info}>
                            <strong>{item.challengeName}</strong>
                            <div>Participants:
                                {item?.challengers?.map((challenger: any) =>
                                    <span key={challenger?.userId}>{challenger?.userName}, </span>
                                )}
                            </div>
                            <small>{item.challengeDateTime} | Create by: {item.creatorName}</small>
                        </div>
                    </div>
                )}
            </TabPanel>
        </Tabs>
    );
};

export default FindChallenges;
