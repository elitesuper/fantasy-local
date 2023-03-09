import React, {useEffect, useState} from "react";

import {ChallengesService} from "../../services/challenges.service";
import {Trophy} from "../../images/Trophy";
import {useAuth} from "../../contexts/AuthContext";
import getAvatar from "../../lib/getAvatar";
import styles from './leaderboard.module';

const Leaderboard = () => {
    const [challenges, setChallenges] = useState([]);
    const [leaderBoards, setLeaderBoards] = useState([]);
    const [selectedChallenge, setSelectedChallenge] = useState("");
    const {user} = useAuth();
    const baseUrl = process.env.PROXY ?? process.env.COMMON_BASE_URL ?? "";
    useEffect(() => {
        if (selectedChallenge == "") {
            ChallengesService.shared.getLeaderBoard({UserId: user.userID, PageIndex: "0", PageSize: "10"}).then(
                response => {
                    if (response?.data?.data) {
                        setLeaderBoards(response?.data?.data?.challenges)
                    }
                },
                error => {
                    console.log(error);
                }
            )
        }
    }, [selectedChallenge])

    useEffect(() => {
        if (selectedChallenge != "") {
            ChallengesService.shared.getChallengeLeaderBoard({UserId: user.userID, Id: selectedChallenge}).then(
                response => {
                    const specifyData = response?.data?.data;
                    if (specifyData) {
                        setChallenges(specifyData);
                    }
                },
                error => {
                    console.log(error);
                },
            )
        }
    }, [selectedChallenge])

    return (
        <>
            <div className="box mb15">
                <div className="boxTitle">Leaderboard
                    {selectedChallenge != "" && <div className="backButton" onClick={() => setSelectedChallenge("")}>Back</div>}
                </div>
            </div>
            {selectedChallenge == "" ?
                <>
                    {leaderBoards.length == 0 ?
                        <div className={styles.noChallenges}>
                            There's no challenges available
                        </div> :
                        <>
                            {leaderBoards.map((item: any) =>
                                <div className={styles.challenge} key={`challengeId${item.challengeId}`} onClick={() => setSelectedChallenge(item.challengeId)}>
                                    <div className={styles.icon}>
                                        <Trophy/>
                                    </div>
                                    <div className={styles.info}>
                                        <strong>{item.challengeName}</strong>
                                        <div>Your current position: {item.position}</div>
                                        <small>Challenge points: {item.points}</small>
                                    </div>
                                </div>
                            )}
                        </>
                    }
                </> :
                <>
                    {challenges.length == 0 ?
                        <div className={styles.noChallenges}>
                            There's no challenges available
                        </div> :
                        <>
                            {challenges.map((item: any) =>
                                <div className={styles.item}>
                                    <div className={styles.avatar}>
                                        <img src={getAvatar(baseUrl, item.picture, "/images/user.png")} alt=""/>
                                    </div>
                                    <div className={styles.user}>
                                        <div className={styles.name}>{item.userName}</div>
                                        <div>
                                            <span>{item.position}</span>
                                        </div>
                                    </div>
                                    <div className={styles.score}>
                                        Season Points
                                        <div className={styles.points}>{item.points}</div>
                                    </div>
                                </div>
                            )}
                        </>
                    }
                </>
            }
        </>
    );
};

export default Leaderboard;
