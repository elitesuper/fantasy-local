import React, { useEffect, useState } from "react";

import styles from './leaderboard.module';
import { AuthService } from "../../services/auth.service";
import { ChallengesService } from "../../services/challenges.service";
import { Trophy } from "../../images/Trophy";

const Leaderboard = () => {
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
                    {challenges.map((item:any)=>
                    <div className={styles.challenge} key={`challengeId${item.challengeId}`}>
                        <div className={styles.icon}>
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

        </>
    );
};

export default Leaderboard;
