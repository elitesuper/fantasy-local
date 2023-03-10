import React, {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import styles from './challenges.module';
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {get10Players} from "../../redux/slices/players/playersActionCreation";
import {Player} from "../../redux/slices/players/playersSlice";
import {updateSelectedFormationData} from "../../redux/slices/matches/matchesSlice";

const PickPlayer = () => {
    const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;
    const navigate = useNavigate();
    const location = useLocation();
    const position = location.state?.position;
    const index = location.state?.index;
    const [players, setPlayers] = useState(Array<Player>);
    const dispatch = useAppDispatch();
    const { wk10Players, bt10Players, ar10Players, bw10Players } = useAppSelector((state: { players: any; }) => state.players);
    const { formationData } = useAppSelector((state: { matches: any; }) => state.matches);
    const fetchData = async () => {
        let positionName = '';
        let dispatchFlag = false;
        switch (position) {
            case 'BW':
                positionName = 'Bowler';
                setPlayers(bw10Players);
                dispatchFlag = !bw10Players.length;
                break;
            case 'BT':
                positionName = 'Batsman';
                setPlayers(bt10Players);
                dispatchFlag = !bt10Players.length;
                break;
            case 'AR':
                positionName = 'All rounder';
                setPlayers(ar10Players);
                dispatchFlag = !ar10Players.length;
                break;
            case 'WK':
                positionName = 'Wicketkeeper'
                setPlayers(wk10Players);
                dispatchFlag = !wk10Players.length;
                break;
        }
        if (dispatchFlag) {
            dispatch(get10Players({pageSize: 10, pageIndex: 0, position: positionName}));
        }
    }
    useEffect(() => {
        fetchData();
    }, [wk10Players, bt10Players, ar10Players, bw10Players]);

    function handleClick(playerId: any) {
        if (formationData) {
            const newFormationData = {...formationData};
            newFormationData[position.toLowerCase() + index] = players.find(v => v.playerId === playerId);
            console.log(newFormationData);
            dispatch(updateSelectedFormationData(newFormationData));
        }
        navigate('/field');
    }
    return (
        <Tabs selectedTabClassName="selected">
            <div className="box mb15">
                <div className="boxTitle">
                    {position === 'WK' && 'Wicketkeeper (WK)'}
                    {position === 'BW' && 'Bowler (BW)'}
                    {position === 'BT' && 'Batsman (BT)'}
                    {position === 'AR' && 'All rounder (AR)'}
                    <div className="backButton" onClick={() => navigate(-1)}>Back</div>
                </div>
                <TabList className="tabs">
                    <Tab className="tab">Top Players</Tab>
                    <Tab className="tab">Round Matches</Tab>
                </TabList>
            </div>
            <TabPanel>
                {players?.map((item:Player) =>
                    <div className={classNames(styles.challengeBox, styles.stakesBox, styles.player)} key={item.playerId} onClick={() => handleClick(item.playerId)}>
                        <div className={styles.shirt}>
                            <img src={baseUrl + item.shirtImageUri} alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>{item.playerName}</div>
                            <div><span>{position}</span> | {item.teamName}</div>
                        </div>
                        <div className={styles.score}>
                            <div>Season Points</div>
                            <div className={styles.points}>{item.points}</div>
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel>
                round matches
            </TabPanel>
        </Tabs>
    );
};

export default PickPlayer;
