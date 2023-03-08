import React from "react";

import styles from './challengeField.module';
import {NavLink} from "react-router-dom";

interface PlayerProps {
    position: string;
    name?: string;
}

const Player = (props: PlayerProps) => {
    return (
        <NavLink to="/pickPlayer" className={styles.playerWrap}>
            <div className={styles.player}>
                <div className={styles.plus}>+</div>{props.position}
                {/*<img src="images/shirt.png" />*/}
            </div>
            <div className={styles.playerName}>
                {props.name}
            </div>
        </NavLink>
    );
};

export default Player;
