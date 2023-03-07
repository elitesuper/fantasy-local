import React, {useEffect, useState} from "react";

import classNames from "classnames";
import {Cricket} from "../../images/Cricket";
import styles from './challenges.module';
import {ChallengesService} from "../../services/challenges.service";
import {AuthService} from "../../services/auth.service";
import {ChallengeData} from "../../models/challenge/challenge-data";

const FindChallenges = () => {
    const [challenges, setChallenges] = useState([])
    const fetchData = async () => {
        ChallengesService.shared.findChallenge({userId: AuthService.shared.getUser()?.userInfo?.userID, challengePrivacy: false, pageSize: 10, pageIndex:1}).then(
            response => {
                setChallenges(response.data.data?.challenges??[]);
            },
            error => {
                console.log(error)
            }
        );
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="box">
                <div className="boxTitle">Find Challenges</div>
                <div className="boxContent">
                    <div className={styles.tabs}>
                        <span className={classNames(styles.tab, styles.selected)}>Private</span>
                        <span className={styles.tab}>Open</span>
                    </div>
                </div>
            </div>
            {challenges.map((item:ChallengeData) =>
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
        </>
    );
};

export default FindChallenges;
