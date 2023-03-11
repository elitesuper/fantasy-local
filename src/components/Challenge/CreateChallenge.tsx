import React, {useEffect, useState} from "react";

import {NavLink, useNavigate} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import classNames from "classnames";

import styles from './challenges.module';
import {LeaguesData, MatchesData} from "../../models/challenge/challenge-data";
import moment from "moment";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {getMatchesDataNoPlayers} from "../../redux/slices/matches/matchesActionCreation";
import {
    Formation, Match, updateSelectedFormationData,
    updateSelectedLeague,
    updateSelectedMatch,
} from "../../redux/slices/matches/matchesSlice";
import {isElement} from "react-dom/test-utils";

const CreateChallenge = () => {
    const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { topMatches, leagues, formation } = useAppSelector((state: { matches: any; }) => state.matches);
    const fetchData = async () => {
        if (!topMatches.length && !leagues.length) {
            dispatch(getMatchesDataNoPlayers())
        }
    }
    function getTimeDiff(matchDate: string) {
        const startDate = moment(new Date());
        const timeEnd = moment(new Date(matchDate));
        const diff = timeEnd.diff(startDate);
        const diffDuration = moment.duration(diff);
        if (diffDuration.days() > 0) {
            return moment(matchDate).format('DD/MM/YY');
        } else {
            return diffDuration.hours() + 'h  ' + diffDuration.minutes() + 'm';
        }
    }
    function handleMatchClick(matchId: any) {
        let formationData = formation?.find((data: Formation) => data.matchId === matchId );
        if (!formationData?.matchId) {
            formationData = {
                matchId: matchId,
                leagueId: 0,
                roundId: 0,
                teamSize: 4,
                wk0: null,
                bw0: null,
                bt0: null,
                ar0: null,
                bw1: null,
                bt1: null,
                ar1: null,
                bw2: null,
                bt2: null,
                ar2: null,
                bw3: null,
                bt3: null,
            }
        }
        dispatch(updateSelectedFormationData(formationData))
        dispatch(updateSelectedMatch(topMatches.find((v: Match) => v.matchId === matchId)));
        navigate('/field');
    }

    function handleLeagueClick(leagueId: any) {
        dispatch(updateSelectedLeague(leagues.find((v: Match) => v.leagueId === leagueId)));
        navigate('/selectRound');
    }

    useEffect(() => {
        fetchData();
    }, [topMatches, leagues])
    return (
        <Tabs selectedTabClassName="selected">
            <div className="box">
                <div className="boxTitle">
                    Create a challenge
                    <div className="backButton" onClick={() => navigate(-1)}>Back</div>
                </div>
                <TabList className="tabs">
                    <Tab className="tab">Matches</Tab>
                    <Tab className="tab">Leagues</Tab>
                </TabList>
            </div>
            <TabPanel className={styles.matchesList}>
                {topMatches.map((item:MatchesData) =>
                    <div className={styles.challengeBox} key={item.matchId} onClick={() => handleMatchClick(item.matchId)}>
                        <div className={styles.match}>
                            <div className={styles.team}>
                                <div className={styles.teamLogo}>
                                    <img src={baseUrl + item.homeTeamImageUri} alt=""/>
                                </div>
                                <div>{item.homeTeamName}</div>
                            </div>
                            <div className={styles.time}>
                                <strong>{item.matchStatus}</strong>
                                <span>{getTimeDiff(item.matchDate)}</span>
                            </div>
                            <div className={styles.team}>
                                <div className={styles.teamLogo}>
                                    <img src={baseUrl + item.awayTeamImageUri} alt=""/>
                                </div>
                                <div>{item.awayTeamName}</div>
                            </div>
                        </div>
                        {/*<div className={styles.oddsWrap}>*/}
                        {/*    <div className={styles.partnerLogo}>*/}
                        {/*        <img src="/images/betway.svg" alt="BetWay"/>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.odds}>*/}
                        {/*        <div className={styles.item}>*/}
                        {/*            1 <span>3.48</span>*/}
                        {/*        </div>*/}
                        {/*        <div className={styles.item}>*/}
                        {/*            2 <span>1.45</span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                )}
            </TabPanel>
            <TabPanel className={styles.matchesList}>
                {leagues.map((item:LeaguesData) =>
                    <div key={item.leagueId} onClick={() => handleLeagueClick(item.leagueId)} className={classNames(styles.challengeBox, styles.stakesBox)}>
                        <img className={styles.icon} src={baseUrl + item.leagueImageUri} alt=""/>
                        <div className={styles.text}><strong>{item.leagueName}</strong><br/>{item.season}</div>
                    </div>
                )}
            </TabPanel>
        </Tabs>
    );
};

export default CreateChallenge;
