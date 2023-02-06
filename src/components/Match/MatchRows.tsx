import React from "react";
import MatchRow from "./MatchRow"
import styles from "./matchRows.module";

const MatchRows = () => {
    return (
        <div className={styles.matchRows}>
            <MatchRow />
            <MatchRow />
            <MatchRow />
            <MatchRow />
        </div>
    );
};

export default MatchRows;
