import React, {useEffect, useState} from "react";
import { TopandFlopData } from "src/models/topandflop/topandflop-data";
import { TopandFlopService } from "../../services/topandflop.service";
import styles from "./topAndFlop.module";

const TopAndFlop = () => {

    const [players, setPlayers] = useState([])
    const fetchData = async () => {
        TopandFlopService.shared.dataFetch({pageSize: 4, pageIndex:0, position:"Batsman"}).then(
            response => {
                setPlayers(response.data.data?.players??[]);
            },
            error => {
                console.log(error)
            }
        );
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className="box">
                <div className="boxTitle">Top and Flop</div>
                <div className={styles.tabs}>
                    <div>WK</div>
                    <div>BW</div>
                    <div>BT</div>
                    <div>AR</div>
                </div>
            </div>
            <div className={styles.list}>
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
                {/* <div className={styles.item}>
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
                </div> */}
            </div>
        </>
    );
};

export default TopAndFlop;
