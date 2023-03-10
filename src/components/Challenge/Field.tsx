import React, {useEffect, useState} from "react";
import Player from "./Player";
import classNames from "classnames";

import styles from './challengeField.module';
import {useAppDispatch, useAppSelector} from "../../redux/hooks/hooks";
import {updateSelectedFormationData} from "../../redux/slices/matches/matchesSlice";

const jssStyle = {
    fieldContainer: {
        background: 'url("/images/field.svg")',
    },
    fieldLines: {
        background: 'url("/images/fieldLines.svg") no-repeat'
    }
}

const Challenge = () => {
    const dispatch = useAppDispatch();
    const { formationData } = useAppSelector((state: { matches: any; }) => state.matches);
    const [teamSize, setTeamSize] = useState(formationData?.teamSize??4);

    const handleClick = (e) => {
        const value = e.currentTarget.getAttribute("value");
        setTeamSize(value);
        updateFormation(value, 'teamSize')
    };

    function updateFormation(value: any, prop: string) {
        if (formationData) {
            const newFormationData = {...formationData};
            newFormationData[prop] = Number(value);
            dispatch(updateSelectedFormationData(newFormationData));
        }
    }

    useEffect(() => {
        setTeamSize(formationData?.teamSize ? formationData?.teamSize : teamSize);
    }, [formationData])

    return (
        <div className={styles.fieldContainer} style={jssStyle.fieldContainer}>
            <div className={styles.tabs}>
                <button className={classNames(styles.tab, Number(teamSize) === 4 ? styles.active : "")} value={4} onClick={handleClick}>4</button>
                <button className={classNames(styles.tab, Number(teamSize) === 8 ? styles.active : "")} value={8} onClick={handleClick}>8</button>
                <button className={classNames(styles.tab, Number(teamSize) === 11 ? styles.active : "")} value={11} onClick={handleClick}>11</button>
            </div>
            <div className={classNames(styles.field, `${styles[`team${teamSize}`]}`)} style={jssStyle.fieldLines}>
                <div className={styles.playerPos}>
                    <Player position="WK" index={0} player={formationData?.wk0}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW" index={0} player={formationData?.bw0}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW" index={1} player={formationData?.bw1}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW" index={2} player={formationData?.bw2}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BW" index={3} player={formationData?.bw3}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT" index={0} player={formationData?.bt0}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT" index={1} player={formationData?.bt1}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT" index={2} player={formationData?.bt2}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="BT" index={3} player={formationData?.bt3}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR" index={0} player={formationData?.ar0}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR" index={1} player={formationData?.ar1}/>
                </div>
                <div className={styles.playerPos}>
                    <Player position="AR" index={2} player={formationData?.ar2}/>
                </div>
            </div>
            <button className={classNames(styles.autoFillButton, "button")}>Auto fill players</button>
        </div>
    );
};

export default Challenge;
