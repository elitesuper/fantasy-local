import React from "react";

import styles from './challenge.module';

interface PlayerProps {
    position: string;
    name?: string;
}

const Player = (props: PlayerProps) => {
    return (
        <>
            <div className={styles.player}>
                +<br/>{props.position}
            </div>
            <div className={styles.playerName}>
                {props.name}
            </div>
        </>
    );
};

export default Player;
