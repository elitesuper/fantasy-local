import React, {useEffect, useState} from "react";
import { TopandFlopData } from "src/models/topandflop/topandflop-data";
import { TopandFlopService } from "../../services/topandflop.service";
import styles from "./topAndFlop.module";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

const TopAndFlop = () => {
    const apiKey = process.env.REACT_APP_COMMON_BASE_URL

    const [players, setPlayers] = useState([])
    const fetchData = async () => {
        TopandFlopService.shared.dataFetch({pageSize: 4, pageIndex:0, position:"Batsman"}).then(
            response => {
                console.log(response.data.data);
                setPlayers(response.data.data?.players??[]);
            },
            error => {
                console.log(error)
            }
        );
        // const data = await response.json()
        // setUsers(data)

    }
    useEffect(() => {
        fetchData()
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
                {players.map((item:TopandFlopData) =>
                    <div className={styles.item} key={`topandflop-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={item?.shirtImageUri} alt=""/>
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
                <div className={styles.item}>
                    <div className={styles.shirt}>
                        <img src="/images/shirt.png" alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Chris Jordan</div>
                        <div><span>WK</span> | Istanbul United</div>
                    </div>
                    <div className={styles.score}>
                        <div>Season Points</div>
                        <div className={styles.points}>2411.5</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.shirt}>
                        <img src="/images/shirt.png" alt=""/>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Chris Jordan</div>
                        <div><span>WK</span> | Istanbul United</div>
                    </div>
                    <div className={styles.score}>
                        <div>Season Points</div>
                        <div className={styles.points}>2411.5</div>
                    </div>
                </div>
            </TabPanel>
            <TabPanel>
                BW
            </TabPanel>
            <TabPanel>
                BT
            </TabPanel>
            <TabPanel>
                AR
            </TabPanel>
        </Tabs>
    );
};

export default TopAndFlop;
