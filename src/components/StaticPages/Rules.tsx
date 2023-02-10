import React from "react";

import styles from './rules.module';

const Rules = () => {
    return (
        <div className={styles.columns}>
            <div className="box">
                <div className="boxTitle">Title #1</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Being a part of the starting XI</div>
                    <div className={styles.ruleValue}>2p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every run scored</div>
                    <div className={styles.ruleValue}>0.5p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (Test)</div>
                    <div className={styles.ruleValue}>8p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (ODI)</div>
                    <div className={styles.ruleValue}>12p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (T20)<span>Excluding run out</span></div>
                    <div className={styles.ruleValue}>10p</div>
                </div>
            </div>
            <div className="box">
                <div className="boxTitle">Title #2</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Catch taken</div>
                    <div className={styles.ruleValue}>2p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every run scored</div>
                    <div className={styles.ruleValue}>0.5p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (Test)</div>
                    <div className={styles.ruleValue}>8p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (ODI)</div>
                    <div className={styles.ruleValue}>12p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (T20)<span>Excluding run out</span></div>
                    <div className={styles.ruleValue}>10p</div>
                </div>
            </div>
            <div className="box">
                <div className="boxTitle">Title #3</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Catch taken</div>
                    <div className={styles.ruleValue}>2p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every run scored</div>
                    <div className={styles.ruleValue}>0.5p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (Test)</div>
                    <div className={styles.ruleValue}>8p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (ODI)</div>
                    <div className={styles.ruleValue}>12p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (T20)<span>Excluding run out</span></div>
                    <div className={styles.ruleValue}>10p</div>
                </div>
            </div>
            <div className="box">
                <div className="boxTitle">Title #4</div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Catch taken</div>
                    <div className={styles.ruleValue}>2p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every run scored</div>
                    <div className={styles.ruleValue}>0.5p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (Test)</div>
                    <div className={styles.ruleValue}>8p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (ODI)</div>
                    <div className={styles.ruleValue}>12p</div>
                </div>
                <div className={styles.rule}>
                    <div className={styles.ruleText}>Every wicket taken (T20)<span>Excluding run out</span></div>
                    <div className={styles.ruleValue}>10p</div>
                </div>
            </div>
        </div>
    );
};

export default Rules;
