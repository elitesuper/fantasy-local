import React, {useEffect, useState} from "react";

import {NavLink, useNavigate} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classNames from "classnames";

import styles from './challenges.module';
import {ChallengesService} from "../../services/challenges.service";
import {LeaguesData, MatchesData} from "../../models/challenge/challenge-data";

const CreateChallenge = () => {
    const navigate = useNavigate();
    const [matches, setMatches] = useState([]);
    const [leagues, setLeagues] = useState([]);
    const fetchData = async () => {
        ChallengesService.shared.matchesDataNoPlayers().then(
            response => {
                console.log(response.data);
                setMatches(response.data.data?.topMatches??[]);
                setLeagues(response.data.data?.leagues??[]);
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
                <div className="boxTitle">
                    Create a challenge
                    <div className={styles.backButton} onClick={() => navigate(-1)}>Back</div>
                </div>
                <TabList className="tabs">
                    <Tab className="tab">Matches</Tab>
                    <Tab className="tab">Leagues</Tab>
                </TabList>
            </div>
            <TabPanel className={styles.matchesList}>
                {matches.map((item:MatchesData) =>
                    <NavLink to={'/pickPlayers'} className={styles.challengeBox} key={item.matchId}>
                        <div className={styles.match}>
                            <div className={styles.team}>
                                <div className={styles.teamLogo}>
                                    <img src={process.env.COMMON_BASE_URL + item.homeTeamImageUri} alt=""/>
                                </div>
                                <div>{item.homeTeamName}</div>
                            </div>
                            <div className={styles.time}>
                                <strong>{item.matchStatus}</strong>
                                <span>{item.matchDate}</span>
                            </div>
                            <div className={styles.team}>
                                <div className={styles.teamLogo}>
                                    <img src={process.env.COMMON_BASE_URL + item.awayTeamImageUri} alt=""/>
                                </div>
                                <div>{item.awayTeamName}</div>
                            </div>
                        </div>
                        <div className={styles.oddsWrap}>
                            <div className={styles.partnerLogo}>
                                <img src="/images/betway.svg" alt="BetWay"/>
                            </div>
                            <div className={styles.odds}>
                                <div className={styles.item}>
                                    1 <span>3.48</span>
                                </div>
                                <div className={styles.item}>
                                    2 <span>1.45</span>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                )}
            </TabPanel>
            <TabPanel className={styles.matchesList}>
                {leagues.map((item:LeaguesData) =>
                    <NavLink key={item.leagueId} to={'/selectRound'} className={classNames(styles.challengeBox, styles.stakesBox)}>
                        <img className={styles.icon} src={item.leagueImageUri} alt=""/>
                        <div className={styles.text}><strong>{item.leagueName}</strong><br/>{item.season}</div>
                    </NavLink>
                )}
            </TabPanel>
        </Tabs>
    );
};

export default CreateChallenge;
