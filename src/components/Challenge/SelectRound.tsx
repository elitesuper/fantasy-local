import React from "react";

import { useNavigate} from "react-router-dom";

import classNames from "classnames";
import styles from './challenges.module';
import {Formation, updateSelectedFormationData} from "../../redux/slices/matches/matchesSlice";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";

const SelectRound = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { league, formation } = useAppSelector((state: { matches: any; }) => state.matches);
    function handleRoundClick(roundId: any) {
        let formationData = formation?.find((data: Formation) => data.roundId === roundId && data.leagueId === league.leagueId );
        if (!formationData?.leagueId) {
            formationData = {
                matchId: 0,
                leagueId: league?.leagueId,
                roundId: roundId,
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
        navigate('/field');
    }
    return (
        <>
            <div className="box mb15">
                <div className="boxTitle">
                    Select a Round
                    <div className="backButton" onClick={() => navigate(-1)}>Back</div>
                </div>
            </div>
            <div onClick={() => handleRoundClick(0)} className={classNames(styles.challengeBox, styles.stakesBox, styles.fullBox)}>
                <div><strong>Next Round</strong></div>
                <div>{league?.roundMatches - league?.todayMatches} Matches - {league?.season}</div>
            </div>
            <div onClick={() => handleRoundClick(1)} className={classNames(styles.challengeBox, styles.stakesBox, styles.fullBox)}>
                <div><strong>Today's matches</strong></div>
                <div>{league?.todayMatches} match</div>
            </div>
            <div onClick={() => handleRoundClick(2)} className={classNames(styles.challengeBox, styles.stakesBox, styles.fullBox)}>
                <div><strong>Single matches</strong></div>
                <div>Only 4-player Formation</div>
            </div>
        </>
    );
};

export default SelectRound;
