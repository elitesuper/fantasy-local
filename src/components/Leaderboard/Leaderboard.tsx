import React, { useEffect, useState } from "react";

import styles from './leaderboard.module';
import classNames from "classnames";
import { AuthService } from "../../services/auth.service";
import { ChallengesService } from "../../services/challenges.service";
import getAvatar from "../../lib/getAvatar";
import { Trophy } from "../../images/Trophy";
import { useAuth } from "../../contexts/AuthContext";

const Leaderboard = () => {
    const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL ?? "";
    const [leaderBoards, setLeaderBoards] = useState([]);
    const [challenges, setChallenges] = useState([]);
    const [selectedChallenge, setSelectedChallenge] = useState("");
    const {user} = useAuth();

    useEffect(()=>{
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
    },[])

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
                                    <strong>India vs. Australia in India Test Series</strong>
                                    <div>Your current position: {item.position}</div>
                                    <small>Challenge points: {item.points}</small>
                                </div>
                            </div>
                        )}
                    </>
                }
            </> : 
            <>
                <div className={styles.item}>
                    <div className={styles.avatar}>
                        <img src="/images/user.png" alt=""/>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.name}>Maja Svensk</div>
                        <div>
                            <span>01</span>
                        </div>
                    </div>
                    <div className={styles.score}>
                        Season Points
                        <div className={styles.points}>2305.0</div>
                    </div>
                </div>
                <div className={classNames(styles.item, styles.selected)}>
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
                </div>
            </>
            }
           

        </>
    );
};

export default Leaderboard;
