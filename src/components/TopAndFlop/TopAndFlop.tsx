import React, {useEffect, useState} from "react";
import { TopandFlopData } from "src/models/topandflop/topandflop-type";
import { TopandFlopService } from "../../services/topandflop.service";
import styles from "./topAndFlop.module";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const TopAndFlop = () => {

    const [wkPlayers, setWKPlayers] = useState([]);
    const [btPlayers, setBTPlayers] = useState([]);
    const [bwPlayers, setBWPlayers] = useState([]);
    const [arPlayers, setARPlayers] = useState([]);
    const fetchData = async () => {
        const positions = ['Wicketkeeper', 'Bowler', 'Batsman', 'All rounder'];
        positions.forEach((position) => {
            TopandFlopService.shared.dataFetch({pageSize: 4, pageIndex:0, position: position}).then(
                response => {
                    switch (position) {
                        case 'Bowler':
                            setBTPlayers(response.data.data?.players??[]);
                            break;
                        case 'Batsman':
                            setBWPlayers(response.data.data?.players??[]);
                            break;
                        case 'All rounder':
                            setARPlayers(response.data.data?.players??[]);
                            break;
                        default:
                            setWKPlayers(response.data.data?.players??[]);
                            break;
                    }
                },
                error => {
                    console.log(error)
                }
            );
        })

    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Tabs selectedTabClassName="selected">
            <div className="box">
                <div className="boxTitle">Top and Flop</div>
                <TabList className="tabsSimple">
                    <Tab className="tab">WK</Tab>
                    <Tab className="tab">BW</Tab>
                    <Tab className="tab">BT</Tab>
                    <Tab className="tab">AR</Tab>
                </TabList>
            </div>
            <TabPanel className={styles.list}>
                {wkPlayers.map((item:TopandFlopData) =>
                    <div className={styles.item} key={`topandflop-wk-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={'process.env.COMMON_BASE_URL' + item?.shirtImageUri} alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>{item?.playerName}</div>
                            <div><span>WK</span> | {item?.teamName}</div>
                        </div>
                        <div className={styles.score}>
                            <div>Season Points</div>
                            <div className={styles.points}>{item?.points}</div>
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel>
                {bwPlayers.map((item:TopandFlopData) =>
                    <div className={styles.item} key={`topandflop-bw-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={process.env.COMMON_BASE_URL + item?.shirtImageUri} alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>{item?.playerName}</div>
                            <div><span>BW</span> | {item?.teamName}</div>
                        </div>
                        <div className={styles.score}>
                            <div>Season Points</div>
                            <div className={styles.points}>{item?.points}</div>
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel>
                {btPlayers.map((item:TopandFlopData) =>
                    <div className={styles.item} key={`topandflop-bt-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={process.env.COMMON_BASE_URL + item?.shirtImageUri} alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>{item?.playerName}</div>
                            <div><span>BT</span> | {item?.teamName}</div>
                        </div>
                        <div className={styles.score}>
                            <div>Season Points</div>
                            <div className={styles.points}>{item?.points}</div>
                        </div>
                    </div>
                )}
            </TabPanel>
            <TabPanel>
                {arPlayers.map((item:TopandFlopData) =>
                    <div className={styles.item} key={`topandflop-ar-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={process.env.COMMON_BASE_URL + item?.shirtImageUri} alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>{item?.playerName}</div>
                            <div><span>AR</span> | {item?.teamName}</div>
                        </div>
                        <div className={styles.score}>
                            <div>Season Points</div>
                            <div className={styles.points}>{item?.points}</div>
                        </div>
                    </div>
                )}
            </TabPanel>
        </Tabs>
    );
};

export default TopAndFlop;
