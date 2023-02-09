import React from 'react';

import { Challenges } from '../../images/Challenges';
import { Trophy } from '../../images/Trophy';
import { Friends } from '../../images/Friends';
import { Chat } from '../../images/Chat';
import { Bars } from '../../images/Bars';
import { Magnifier } from '../../images/Magnifier';
import styles from './navbar.module'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <NavLink className={styles.item} to="/dashboard" page={'challenges'}>
                <Challenges/>
                Challenges
            </NavLink>
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
