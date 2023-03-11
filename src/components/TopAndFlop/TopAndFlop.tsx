import React from "react";
import styles from "./topAndFlop.module";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useAppSelector } from "../../redux/hooks/hooks";
import {Player} from "../../redux/slices/players/playersSlice";

const TopAndFlop = () => {
    const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;
    const { wkPlayers, btPlayers, arPlayers, bwPlayers } = useAppSelector((state: { players: any; }) => state.players);

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
                {wkPlayers.map((item:Player) =>
                    <div className={styles.item} key={`topandflop-wk-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={baseUrl + item?.shirtImageUri} alt=""/>
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
                {bwPlayers.map((item:Player) =>
                    <div className={styles.item} key={`topandflop-bw-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={baseUrl + item?.shirtImageUri} alt=""/>
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
                {btPlayers.map((item:Player) =>
                    <div className={styles.item} key={`topandflop-bt-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={baseUrl + item?.shirtImageUri} alt=""/>
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
                {arPlayers.map((item:Player) =>
                    <div className={styles.item} key={`topandflop-ar-${item?.playerId}`}>
                        <div className={styles.shirt}>
                            <img src={baseUrl + item?.shirtImageUri} alt=""/>
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
