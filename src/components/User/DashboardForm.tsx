import React from "react";
import {NavLink} from "react-router-dom";

import Field from "../Challenge/Field";
import Leaderboard from "../Leaderboard/Leaderboard";
import Friends from "../Friends/Friends";
import Chat from "../Chat/Chat";
import TopAndFlop from "../TopAndFlop/TopAndFlop";
import FindChallenges from "../FindChallenges/FindChallenges";
import About from "../StaticPages/About";
import Rules from "../StaticPages/Rules";
import Terms from "../StaticPages/Terms";
import Profile from "../User/Profile";

import {Trophy} from "../../images/Trophy";
import styles from './dashboard.module';
import classNames from "classnames";

interface HeaderProps {
    page?: string;
}
const DashboardForm = (props: HeaderProps) => {

    return (
        <div className={styles.dashboard}>
            <div className={styles.leftColumn}>
                <div className={classNames(`box`, styles.profile)}>
                    <div className="boxTitle">My profile</div>
                    <div className={classNames(`boxContainer`, styles.user)}>
                        <div className={styles.avatar}>
                            <img src="/images/user.png" alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>Christian Andersen</div>
                            <div className={styles.email}>christian.andersen@sport.cc</div>
                            <button className="button"><Trophy/> 10</button>
                            <button className="button buttonSecondary"><Trophy/> 0</button>
                        </div>
                    </div>
                </div>
                <div className={classNames(`box`, styles.menu)}>
                    <div className="boxTitle">Menu</div>
                    <div className={classNames(`boxContent`, styles.menuLinks)}>
                        <NavLink className={classNames(styles.item, props.page === 'dashboard' ? styles.active : "")} to="/dashboard">
                            Home
                        </NavLink>
                        <NavLink className={classNames(styles.item, props.page === 'profile' ? styles.active : "")} to="/profile">
                            My profile
                        </NavLink>
                        <NavLink className={classNames(styles.item, props.page === 'rules' ? styles.active : "")} to="/rules">
                            Point system
                        </NavLink>
                        <NavLink className={classNames(styles.item, props.page === 'about' ? styles.active : "")} to="/about">
                            About
                        </NavLink>
                        <NavLink className={classNames(styles.item, props.page === 'terms' ? styles.active : "")} to="/terms">
                            Terms & Conditions
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.body}>
                {props.page === 'profile' && <Profile/>}
                {props.page === 'about' && <About/>}
                {props.page === 'rules' && <Rules/>}
                {props.page === 'terms' && <Terms/>}
                {props.page === 'challenge' && <Field/>}
                {props.page === 'leaderboard' && <Leaderboard/>}
                {props.page === 'friends' && <Friends/>}
                {props.page === 'chat' && <Chat/>}
                {props.page === 'topAndFlop' && <TopAndFlop/>}
                {props.page === 'findChallenges' && <FindChallenges/>}
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.box}>
                    <TopAndFlop />
                </div>
            </div>
        </div>
    );
};

export default DashboardForm;
