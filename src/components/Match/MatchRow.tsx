import React from "react";

import classNames from "classnames";
import flag from "../../../public/images/flag"
import styles from "./matchRow.module"

const MatchRow = () => {
    return (
        <>
            <div className={styles.match}>
                <div className={classNames(styles.team, styles.home)}>
                    <img src={flag} alt="India" />
                </div>
                <div className={styles.info}>
                    <div>IND vs PAK</div>
                    <div className={styles.comp}>T20 World Cup 2022</div>
                </div>
                <div className={classNames(styles.team, styles.home)}>
                    <img src={flag} alt="Pakistan" />
                </div>
            </div>
        </>
    );
};

export default MatchRow;
