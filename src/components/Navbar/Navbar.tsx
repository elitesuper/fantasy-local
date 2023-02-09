import React from 'react';

import { Challenges } from '../../images/Challenges';
import { Trophy } from '../../images/Trophy';
import { Friends } from '../../images/Friends';
import { Chat } from '../../images/Chat';
import { Bars } from '../../images/Bars';
import { Magnifier } from '../../images/Magnifier';
import styles from './navbar.module'
import {NavLink} from "react-router-dom";
interface HeaderProps {
    page?: string;
}
const NavBar = (props: HeaderProps) => {
    return (
        <div className={styles.nav}>
            <NavLink className={props.page === 'challenge' ? styles.active : styles.item} to="/dashboard">
                <Challenges/>
                Challenges
            </NavLink>
            <NavLink className={props.page === 'leaderboard' ? styles.active : styles.item} to="/leaderboard">
                <Trophy/>
                Leaderboard
            </NavLink>
            <NavLink className={props.page === 'friends' ? styles.active : styles.item} to="/friends">
                <Friends/>
                Friends
            </NavLink>
            <NavLink className={props.page === 'chat' ? styles.active : styles.item} to="/chat">
                <Chat/>
                Chat
            </NavLink>
            <NavLink className={props.page === 'topAndFlop' ? styles.active : styles.item} to="/topAndFlop">
                <Bars/>
                Top and Flop
            </NavLink>
            <NavLink className={props.page === 'findChallenges' ? styles.active : styles.item} to="/findChallenges">
                <Magnifier/>
                Find Challenges
            </NavLink>
        </div>
    );
};

export default NavBar;
