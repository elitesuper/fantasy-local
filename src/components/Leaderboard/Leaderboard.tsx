import React, { useEffect, useState } from "react";

import styles from './leaderboard.module';
import classNames from "classnames";
import { AuthService } from "../../services/auth.service";
import { ChallengesService } from "../../services/challenges.service";

const Leaderboard = () => {
    const [leaderBoards, setLeaderBoards] = useState([]);
    const [challenges, setChallenges] = useState([]);

    useEffect(()=>{
        const user = AuthService.shared.getUser();
        const userId = user?.userId || user?.userID;
        ChallengesService.shared.getLeaderBoard({UserId:userId, PageIndex:"0", PageSize:"10"}).then(
            response =>{
                console.log(response?.data?.data);
                if(response?.data?.data){
                    setChallenges(response?.data?.data?.challenges)
                }
            },
            error =>{
                console.log(error);
            }
        )
    },[])
    return (
        <>
            <div className="box">
                <div className="boxTitle bn">Leaderboard</div>
            </div>
            {challenges.length == 0 ?            
                <div className={styles.noChallenges}>
                    There's no challenges available
                </div>:
                <>
                    <div className={styles.item}>
                        <div className={styles.avatar}>
                            <img src="/images/user.png" alt=""/>
                        </div>
                        <div className={styles.user}>
                            <div className={styles.name}>Maja Svensk</div>
                            <div>
                                <span>01</span> | Win: 9 | Lost: 1
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
                                <span>02</span> | Win: 9 | Lost: 1
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
                                <span>03</span> | Win: 9 | Lost: 1
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
