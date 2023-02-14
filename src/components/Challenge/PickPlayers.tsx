import React, {useState} from "react";
import Player from "./Player";
import classNames from "classnames";

import styles from './challengeField.module';

const jssStyle = {
    fieldContainer: {
        background: 'url("/images/field.svg")',
    },
    fieldLines: {
        background: 'url("/images/fieldLines.svg") no-repeat'
    }
}

const Challenge = () => {
    const [teamSize, setTeamSize] = useState('team4');

    const handleClick = (e) => {
        const value = e.currentTarget.getAttribute("value");
        setTeamSize(value);
    };

    return (
        <div className={styles.fieldContainer} style={jssStyle.fieldContainer}>
            <div className={styles.tabs}>
                <button className={classNames(styles.tab, teamSize === "team4" ? styles.active : "")} value="team4" onClick={handleClick}>4</button>
                <button className={classNames(styles.tab, teamSize === "team8" ? styles.active : "")} value="team8" onClick={handleClick}>8</button>
                <button className={classNames(styles.tab, teamSize === "team11" ? styles.active : "")} value="team11" onClick={handleClick}>11</button>
            </div>
            <div className={classNames(styles.field, `${styles[teamSize]}`)} style={jssStyle.fieldLines}>
                <div className={styles.playerPos}>
                    <Player position="WK"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR"/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR"/>
                </div>
            </div>
            {/*<button className="button">Auto fill players</button>*/}
        </div>
    );
};

export default Challenge;
