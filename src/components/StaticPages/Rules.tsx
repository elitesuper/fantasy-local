import React from "react";

import classNames from "classnames";
import styles from './rules.module';

const Rules = () => {
    return (
        <div className={styles.columns}>
            <div className={classNames("box", styles.boxCustom)}>
                <div className="boxTitle">Title #1</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Being a part of the starting XI</div>
                    <div className={styles.ruleValue}>2 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every run scored</div>
                    <div className={styles.ruleValue}>0.5 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (Test)</div>
                    <div className={styles.ruleValue}>8 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (ODI)</div>
                    <div className={styles.ruleValue}>12 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (T20)<span>Excluding run out</span></div>
                    <div className={styles.ruleValue}>10 p</div>
                </div>
            </div>
            <div className={classNames("box", styles.boxCustom)}>
                <div className="boxTitle">Title #2</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Catch taken</div>
                    <div className={styles.ruleValue}>4 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Caught & Bowled (Test)</div>
                    <div className={styles.ruleValue}>12 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Caught & Bowled (ODI)</div>
                    <div className={styles.ruleValue}>16 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Caught & Bowled (T20)</div>
                    <div className={styles.ruleValue}>14 p</div>
                </div>
            </div>
            <div className={classNames("box", styles.boxCustom)}>
                <div className="boxTitle">Title #3</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Dismissal for a Duck (Test)</div>
                    <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-4 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Dismissal for a Duck (ODI)</div>
                    <div className={styles.ruleValue}>12p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Dismissal for a Duck (T20)<span>Only for batsmen, wicket-keepers and all-rounders</span></div>
                    <div className={styles.ruleValue}>16 p</div>
                </div>
            </div>
            <div className={classNames("box", styles.boxCustom)}>
                <div className="boxTitle">Title #4</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Man of the match</div>
                    <div className={styles.ruleValue}>8 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Match won</div>
                    <div className={styles.ruleValue}>8 p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Match lost</div>
                    <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-8 p</div>
                </div>
            </div>
        </div>
    );
};

export default Rules;
