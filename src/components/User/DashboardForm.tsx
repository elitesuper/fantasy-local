import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

import Leaderboard from "../Leaderboard/Leaderboard";
import Friends from "../Friends/Friends";
import Chat from "../Chat/Chat";
import TopAndFlop from "../TopAndFlop/TopAndFlop";
import FindChallenges from "../Challenge/FindChallenges";
import About from "../StaticPages/About";
import Rules from "../StaticPages/Rules";
import Terms from "../StaticPages/Terms";
import Profile from "../User/Profile";
import Challenge from "../Challenge/Challenge";
import CreateChallenge from "../Challenge/CreateChallenge";
import Field from "../Challenge/Field";
import Stakes from "../Challenge/Stakes";
import Ads from "../Ads/Ads";

import {Trophy} from "../../images/Trophy";
import classNames from "classnames";
import SelectRound from "../Challenge/SelectRound";
import {Edit} from "../../images/Edit";

import styles from "./dashboard.module";
import {useAuth} from "../../contexts/AuthContext";
import PickPlayer from "../Challenge/PickPlayer";
import OverviewChallenge from "../Challenge/OverviewChallenge";
import getAvatar from "../../lib/getAvatar";

interface HeaderProps {
    page?: string;
}

const DashboardForm = (props: HeaderProps) => {

    const userData = useAuth();
    const navigate = useNavigate();
    const baseUrl:string  = process.env.PROXY ?? "";

    return (
        <div className={styles.dashboard}>
            <div className={styles.leftColumn}>
                <div className={classNames(`box`, styles.profile)}>
                    <div className="boxTitle">My profile</div>
                    <div className={classNames(`boxContainer`, styles.user)}>
                        <div className={styles.avatar}>
                            <span className={styles.icon} onClick={()=> navigate('/profile')}><Edit/></span>
                            <img src={getAvatar(baseUrl, userData?.user?.picture, "/images/missing.png")} width={"120px"} height={"120px"} alt=""/>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>{userData?.user?.firstName + ' ' + userData?.user?.lastName}</div>
                            <div className={styles.email}>{userData?.user?.email}</div>
                            <button className="button"><Trophy/> {userData?.user?.totalWin}</button>
                            <button className="button buttonSecondary"><Trophy/> {userData?.user?.totalLost}</button>
                        </div>
                    </div>
                </div>
                <div className={classNames(`box`, styles.menu)}>
                    <div className="boxTitle">Menu</div>
                    <div className={classNames(`boxContent`, styles.menuLinks)}>
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

                {props.page === 'findChallenges' && (
                    <NavLink to="/createChallenge" className="button large mt10">+ Create a Challenge</NavLink>
                )}
                {props.page === 'chat' && <Ads/>}
            </div>
            <div className={styles.body}>
                {props.page === 'profile' && <Profile/>}
                {props.page === 'about' && <About/>}
                {props.page === 'rules' && <Rules/>}
                {props.page === 'terms' && <Terms/>}
                {props.page === 'challenge' && <Challenge/>}
                {props.page === 'leaderboard' && <Leaderboard/>}
                {props.page === 'friends' && <Friends/>}
                {props.page === 'chat' && <Chat/>}
                {props.page === 'topAndFlop' && <TopAndFlop/>}
                {props.page === 'findChallenges' && <FindChallenges/>}
                {props.page === 'createChallenge' && <CreateChallenge/>}
                {props.page === 'overviewChallenge' && <OverviewChallenge/>}
                {props.page === 'field' && <Field/>}
                {props.page === 'stakes' && <Stakes/>}
                {props.page === 'selectRound' && <SelectRound/>}
                {props.page === 'pickPlayer' && <PickPlayer/>}
                {props.page !== 'chat' && <Ads/>}
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.box}>
                    <TopAndFlop/>
                </div>
            </div>
        </div>
    );
};

export default DashboardForm;
