import React from 'react';

import { Challenges } from '../../images/Challenges';
import { Trophy } from '../../images/Trophy';
import { Friends } from '../../images/Friends';
import { Chat } from '../../images/Chat';
import { Bars } from '../../images/Bars';
import { Magnifier } from '../../images/Magnifier';
import styles from './navbar.module'

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.item}>
                <Challenges/>
                Challenges
            </div>
            <div className={styles.item}>
                <Trophy/>
                Leaderboard
            </div>
            <div className={styles.item}>
                <Friends/>
                Friends
            </div>
            <div className={styles.item}>
                <Chat/>
                Chat
            </div>
            <div className={styles.item}>
                <Bars/>
                Top and Flop
            </div>
            <div className={styles.item}>
                <Magnifier/>
                Find Challenges
            </div>
        </div>
    );
};

export default NavBar;
