import React from "react";

import styles from './challengeField.module';
import {NavLink} from "react-router-dom";

interface PlayerProps {
    position: string;
    index: number;
    player: any;
}
const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;
const Player = (props: PlayerProps) => {
    return (
        <NavLink to="/pickPlayer" className={styles.playerWrap} state={props}>
            {!props?.player?.playerName &&
            <div className={styles.player}>
                <div className={styles.plus}>+</div>{props.position}
            </div>
            }
            {props?.player?.playerName &&
                <>
                    <div className={styles.player}>
                        <img src={baseUrl + props.player.shirtImageUri}/>
                    </div>
                    <div className={styles.playerName}>{props.player.playerName}</div>
                </>
            }
        </NavLink>
    );
};

export default Player;
