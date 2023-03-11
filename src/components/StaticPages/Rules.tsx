import React from "react";

import classNames from "classnames";
import styles from './rules.module';

const Rules = () => {
    return (
        <>
            <div className="box mb15">
                <div className="boxTitle">Point System</div>
            </div>
            <div className={styles.columns}>
                <div className={classNames("box", styles.boxCustom)}>
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
                        <div className={styles.ruleText}>Every wicket taken (T20)<span>(Excluding run out)</span></div>
                        <div className={styles.ruleValue}>10 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
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
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Dismissal for a Duck (Test)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-4 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Dismissal for a Duck (ODI)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-3 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Dismissal for a Duck (T20)<span>(Only for batsmen, wicket-keepers and all-rounders)</span></div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-2 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Stump Out</div>
                        <div className={styles.ruleValue}>2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Run Out</div>
                        <div className={styles.ruleValue}>6 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
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
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Toss won</div>
                        <div className={styles.ruleValue}>4 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Toss lost</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-4 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Every boundary hit</div>
                        <div className={styles.ruleValue}>0.5 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Every six hit</div>
                        <div className={styles.ruleValue}>1 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Half Century (Test & ODI)</div>
                        <div className={styles.ruleValue}>2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Half Century (T20)<span>(50 runs scored by a batsman in a single inning)</span></div>
                        <div className={styles.ruleValue}>4 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Century (Test & ODI)</div>
                        <div className={styles.ruleValue}>4 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Century (T20)<span>(100 runs scored by a batsman in a single inning)</span></div>
                        <div className={styles.ruleValue}>8 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Maiden Over (ODI)</div>
                        <div className={styles.ruleValue}>2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Maiden Over (T20)</div>
                        <div className={styles.ruleValue}>4 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>4 wickets (Test)</div>
                        <div className={styles.ruleValue}>4 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>4 wickets (ODI & T20)</div>
                        <div className={styles.ruleValue}>2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>5 wickets (Test)</div>
                        <div className={styles.ruleValue}>8 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>5 wickets (ODI & T20)</div>
                        <div className={styles.ruleValue}>4 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 4.5 and 3.5 runs per over (ODI)</div>
                        <div className={styles.ruleValue}>1 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 3.49 and 2.5 runs per over (ODI)</div>
                        <div className={styles.ruleValue}>2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Below 2.5 runs per over (ODI)</div>
                        <div className={styles.ruleValue}>3 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 7 and 8 runs per over (ODI)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-1 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 8.01 and 9 runs per over (ODI)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Above 9 runs per over (ODI)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-3 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 6 and 5 runs per over (T20)</div>
                        <div className={styles.ruleValue}>1 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 4.99 and 4 runs per over (T20)</div>
                        <div className={styles.ruleValue}>2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Below 4 runs per over (T20)</div>
                        <div className={styles.ruleValue}>3 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 9 and 10 runs per over (T20)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-1 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 10.01 and 11 runs per over (T20)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Above 11 runs per over (T20)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-3 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 50 and 60 runs per 100 balls (ODI)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-1 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 40 and 49.99 runs per 100 balls (ODI)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Below 40 runs per 100 balls (ODI)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-3 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 60 and 70 runs per 100 balls (T20)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-1 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Between 50 and 59.99 per 100 balls (T20)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Below 50 runs per 100 balls (T20)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-3 p</div>
                    </div>
                </div>
                <div className={classNames("box", styles.boxCustom)}>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Conceding Bye score (For Wicket Keeper only)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-2 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Extra Wide/No (For Bowler only)</div>
                        <div className={classNames(styles.ruleValue, styles.ruleNeg)}>-1 p</div>
                    </div>
                    <div className={styles.rule}>
                        <div className={styles.ruleText}>Not Out</div>
                        <div className={styles.ruleValue}>4 p</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Rules;
