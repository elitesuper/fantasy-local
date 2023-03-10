import React, { useEffect, useState } from "react";

import styles from './leaderboard.module';
import { AuthService } from "../../services/auth.service";
import { ChallengesService } from "../../services/challenges.service";
import { Trophy } from "../../images/Trophy";
import { useAuth } from "../../contexts/AuthContext";
import classNames from "classnames";
import getAvatar from "../../lib/getAvatar";

const Leaderboard = () => {
    const [challenges, setChallenges] = useState([]);
    const [leaderBoards, setLeaderBoards] = useState([]);

    const [selectedChallenge, setSelectedChallenge] = useState("");
    const {user} = useAuth();
    const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL ?? "";
    useEffect(()=>{
        if(selectedChallenge == ""){
        ChallengesService.shared.getLeaderBoard({UserId:user.userID, PageIndex:"0", PageSize:"10"}).then(
            response =>{
                console.log(response?.data?.data);
                if(response?.data?.data){
                    setLeaderBoards(response?.data?.data?.challenges)
                }
            },
            error =>{
                console.log(error);
            }
        )
        }
    },[selectedChallenge])

    useEffect(()=>{
        if(selectedChallenge != ""){
            ChallengesService.shared.getChallengeLeaderBoard({UserId:user.userID, Id:selectedChallenge}).then(
                response => {
                    const specifyData = response?.data?.data;
                    if(specifyData){
                        setChallenges(specifyData);
                    }
                },
                error => {
                    console.log(error);
                },
            )
        }
    },[selectedChallenge])

    return (
        <>
            <div className="box">
                <div className="boxTitle bn">Leaderboard</div>
                {selectedChallenge != "" && <div onClick={()=>setSelectedChallenge("")}> back </div>} 
            </div>
            {selectedChallenge == "" ? 
            <>
                { leaderBoards.length == 0 ?
                    <div className={styles.noChallenges}>
                        There's no challenges available
                    </div>:
                    <>
                        {leaderBoards.map((item:any)=>
                            <div className={styles.challenge} key={`challengeId${item.challengeId}`} onClick={()=>setSelectedChallenge(item.challengeId)}>
                                <div className={styles.ball}>
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
            { challenges.length == 0 ?
                <div className={styles.noChallenges}>
                    There's no challenges available
                </div>:
                <>
                    {challenges.map((item:any)=>
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
                                <div className={styles.points}>{item.point}</div>
                            </div>
                        </div>
                    )}


                    {/* <div className={classNames(styles.item, styles.selected)}>
                        <div className={styles.avatar}>
                            <img src="/images/user.png" alt=""/>
                        </div>
                        <div className={styles.user}>
                            <div className={styles.name}>You</div>
                            <div>
                                <span>02</span>
                            </div>
                        </div>
                        <div className={styles.score}>
                            Season Points
                            <div className={styles.points}>2305.0</div>
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.avatar}>
                            <img src="/images/user.png" alt=""/>
                        </div>
                        <div className={styles.user}>
                            <div className={styles.name}>Thomas Andersen</div>
                            <div>
                                <span>03</span>
                            </div>
                        </div>
                        <div className={styles.score}>
                            Season Points
                            <div className={styles.points}>2305.0</div>
                        </div>
                    </div> */}
                </>
            }
            </>
            }
        </>
    );
};

export default Leaderboard;
