import React, {useState} from 'react';

import { Challenges } from '../../images/Challenges';
import { Trophy } from '../../images/Trophy';
import { Friends } from '../../images/Friends';
import { Chat } from '../../images/Chat';
import { Magnifier } from '../../images/Magnifier';
import {NavLink} from "react-router-dom";
import classNames from "classnames";

import styles from './navbar.module'

interface HeaderProps {
    page?: string;
}
const NavBar = (props: HeaderProps) => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    return (
        <>
            <div onClick={toggleHamburger} className={classNames(styles.hamburger, hamburgerOpen ? styles.isOpen : '')}>
                <div className={classNames(styles.burger, styles.burger1)}/>
                <div className={classNames(styles.burger, styles.burger2)}/>
                <div className={classNames(styles.burger, styles.burger3)}/>
            </div>
            <div className={classNames(styles.nav, hamburgerOpen ? styles.showMenu : styles.hideMenu)}>
                <NavLink className={classNames(styles.item, props.page === 'challenge' ? styles.active : "")} to="/dashboard">
                    <Challenges/>
                    Challenges
                </NavLink>
                <NavLink className={classNames(styles.item, props.page === 'leaderboard' ? styles.active : "")} to="/leaderboard">
                    <Trophy/>
                    Leaderboard
                </NavLink>
                <NavLink className={classNames(styles.item, props.page === 'friends' ? styles.active : "")} to="/friends">
                    <Friends/>
                    Friends
                </NavLink>
                <NavLink className={classNames(styles.item, props.page === 'chat' ? styles.active : "")} to="/chat">
                    <Chat/>
                    Chat
                </NavLink>
                <NavLink className={classNames(styles.item, props.page === 'findChallenges' ? styles.active : "")} to="/findChallenges">
                    <Magnifier/>
                    Find Challenges
                </NavLink>
            </div>
        </>
    );
};

export default NavBar;
