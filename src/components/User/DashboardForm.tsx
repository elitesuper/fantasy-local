import React, {useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import Field from "../Challenge/Field";
import Leaderboard from "../Leaderboard/Leaderboard";
import Friends from "../Friends/Friends";
import Chat from "../Chat/Chat";
import TopAndFlop from "../TopAndFlop/TopAndFlop";
import FindChallenges from "../FindChallenges/FindChallenges";
import About from "../About/About";
import Rules from "../Rules/Rules";
import Terms from "../Terms/Terms";
import Profile from "../User/Profile";

import {Trophy} from "../../images/Trophy";
import {Challenges} from "../../images/Challenges";
import styles from './dashboard.module';

interface HeaderProps {
    page?: string;
}
const DashboardForm = (props: HeaderProps) => {

    return (
        <div className={styles.dashboard}>
            <div className={styles.leftColumn}>
                <div className={styles.profile}>
                    <div className={styles.title}>My profile</div>
                    <div className={styles.user}>
                        <div className={styles.avatar}>
                            <img src="./public/images/avatar.jpg" alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>Christian Andersen</div>
                            <div className={styles.email}>christian.andersen@sport.cc</div>
                            <button className="button"><Trophy/> 10</button>
                            <button className="button button-secondary"><Trophy/> 0</button>
                        </div>
                    </div>
                </div>
                <NavLink className={props.page === 'dashboard' ? styles.active : styles.item} to="/dashboard">
                    Home
                </NavLink>
                <NavLink className={props.page === 'profile' ? styles.active : styles.item} to="/profile">
                    My profile
                </NavLink>
                <NavLink className={props.page === 'rules' ? styles.active : styles.item} to="/rules">
                    Point system
                </NavLink>
                <NavLink className={props.page === 'about' ? styles.active : styles.item} to="/about">
                    About
                </NavLink>
                <NavLink className={props.page === 'terms' ? styles.active : styles.item} to="/terms">
                    Terms & Conditions
                </NavLink>
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
                    Top and Flop
                </div>
            </div>
        </div>
    );
};

export default DashboardForm;
