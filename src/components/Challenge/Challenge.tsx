import React, {useEffect, useState} from "react";
import {Cricket} from "../../images/Cricket";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import {ChallengesService} from "../../services/challenges.service";
import {AuthService} from "../../services/auth.service";
import {ChallengeData} from "../../models/challenge/challenge-data";
import moment from "moment/moment";

import styles from './challenges.module';

const Challenge = () => {
    const [openChallenges, setOpenChallenges] = useState([]);
    const [startedChallenges, setStartedChallenges] = useState([]);
    const [finishedChallenges, setFinishedChallenges] = useState([]);
    const fetchData = async () => {
        ChallengesService.shared.myChallenges({userId: AuthService.shared.getUser()?.userInfo?.userID, challengeStatus: 'Upcoming', pageSize: 10, pageIndex:1}).then(
            response => {
                setOpenChallenges(response.data.data?.challenges??[]);
            },
            error => {
                console.log(error)
            }
        );

        ChallengesService.shared.myChallenges({userId: AuthService.shared.getUser()?.userInfo?.userID, challengeStatus: 'Upcoming', pageSize: 10, pageIndex:1}).then(
            response => {
                setStartedChallenges(response.data.data?.challenges??[]);
            },
            error => {
                console.log(error)
            }
        );
        ChallengesService.shared.myChallenges({userId: AuthService.shared.getUser()?.userInfo?.userID, challengeStatus: 'Upcoming', pageSize: 10, pageIndex:1}).then(
            response => {
                setFinishedChallenges(response.data.data?.challenges??[]);
            },
            error => {
                console.log(error)
            }
        );
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Tabs selectedTabClassName="selected">
            <div className="box">
                <div className="boxTitle">Challenges</div>
                <TabList className="tabs">
                    <Tab className="tab">Open</Tab>
                    <Tab className="tab">Started</Tab>
                    <Tab className="tab">Finished</Tab>
                </TabList>
            </div>
            <TabPanel>
                {!openChallenges?.length ? <div className={styles.noChallenges}>There's no challenges available</div> : ''}
                {openChallenges.map((item:ChallengeData) =>
                    <div className={styles.challenge}>
                        <div className={styles.ball}>
                            <Cricket/>
                        </div>
                        <div className={styles.info}>
                            <strong>{item.challengeName}</strong>
                            <div>Participants:
                                {item?.challengers?.map((challenger: any) =>
                                    <span key={`challenger-private-${challenger?.userId}-${challenger?.challengerPosition}`}>{challenger?.userName}, </span>
                                )}
                            </div>
                            <small>{moment(item.challengeDateTime).format('DD/MM/YY hh:mm')} | Create by: {item.creatorName}</small>
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel>
                {!startedChallenges?.length ? <div className={styles.noChallenges}>There's no challenges available</div> : ''}
                {startedChallenges.map((item:ChallengeData) =>
                    <div className={styles.challenge}>
                        <div className={styles.ball}>
                            <Cricket/>
                        </div>
                        <div className={styles.info}>
                            <strong>{item.challengeName}</strong>
                            <div>Participants:
                                {item?.challengers?.map((challenger: any) =>
                                    <span key={`challenger-private-${challenger?.userId}-${challenger?.challengerPosition}`}>{challenger?.userName}, </span>
                                )}
                            </div>
                            <small>{moment(item.challengeDateTime).format('DD/MM/YY hh:mm')} | Create by: {item.creatorName}</small>
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel>
                {!finishedChallenges?.length ? <div className={styles.noChallenges}>There's no challenges available</div> : ''}
                {finishedChallenges.map((item:ChallengeData) =>
                    <div className={styles.challenge}>
                        <div className={styles.ball}>
                            <Cricket/>
                        </div>
                        <div className={styles.info}>
                            <strong>{item.challengeName}</strong>
                            <div>Participants:
                                {item?.challengers?.map((challenger: any) =>
                                    <span key={`challenger-private-${challenger?.userId}-${challenger?.challengerPosition}`}>{challenger?.userName}, </span>
                                )}
                            </div>
                            <small>{moment(item.challengeDateTime).format('DD/MM/YY hh:mm')} | Create by: {item.creatorName}</small>
                        </div>
                    </div>
                )}
            </TabPanel>
        </Tabs>
    );
};

export default Challenge;
