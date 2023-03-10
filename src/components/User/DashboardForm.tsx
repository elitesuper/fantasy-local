import React, {useState, useEffect} from "react";
import { useDropzone } from "react-dropzone";
import {NavLink} from "react-router-dom";
import { toast } from 'react-toastify';


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
import { AuthService } from "../../services/auth.service";
import InviteFriends from "../Friends/InviteFriends";
import Menu from "../Navbar/Menu";

interface HeaderProps {
    page?: string;
}


interface FileProp {
    name: string
    type: string
    size: number
}

const DashboardForm = (props: HeaderProps) => {

    const userData = useAuth();
    const [files, setFiles] = useState<File[]>([]);

    const baseUrl:string  = process.env.PROXY ?? "";

    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        accept: {
        'image/*': ['.png', '.jpg', '.jpeg', '.gif']
        },
        onDrop: (acceptedFiles) => {
          setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
        },
    });

    const img = files.map((file: FileProp) => (
        <img key={file.name} alt={file.name} width={"120px"} height={"120px"} src={URL.createObjectURL(file as any)} />
    ))

    useEffect(() =>  {
        files.forEach((file:File)=>{
            const formData = new FormData();
            formData.append("userId", userData?.user?.userID)
            formData.append("pic", files[0]);
            console.log(formData);
            AuthService.shared.updateProfilePicture(formData).then(
                response=>{
                    const newAvatar: string = response?.data?.data?.picture;
                    if(newAvatar){
                        // setImage(newAvatar);
                        toast.success("Successfully uploaded!");
                        let data = userData.user;
                        data.picture = newAvatar;
                        userData.update(data);
                    }else(
                        toast.error(response?.data?.message)
                    )
                },
                error=>{
                    toast.error("Something went wrong!");
                }
            )
        })
    },[files])

    return (
        <div className={styles.dashboard}>
            <div className={classNames(styles.leftColumn, 'isDesktop')}>
                <div className={classNames(`box`, styles.profile)}>
                    <div className="boxTitle">My profile</div>
                    <div className={classNames(`boxContainer`, styles.user)}>
                        <div className={styles.avatar}>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <span className={styles.icon}><Edit/></span>
                            </div>
                            {files.length?img:<img src={getAvatar(baseUrl, userData?.user?.picture, "/images/missing.png")} width={"120px"} height={"120px"} alt=""/>}
                        </div>
                        <div className={styles.info}>
                            <div className={styles.name}>{userData?.user?.firstName + ' ' + userData?.user?.lastName}</div>
                            <div className={styles.email}>{userData?.user?.email}</div>
                            <button className="button fake"><Trophy/> {userData?.user?.totalWin}</button>
                            <button className="button buttonSecondary fake"><Trophy/> {userData?.user?.totalLost}</button>
                        </div>
                    </div>
                </div>
                <div className={classNames(`box`, styles.menu)}>
                    <div className="boxTitle">Menu</div>
                    <Menu/>
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
                {props.page === 'inviteFriends' && <InviteFriends/>}
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
            <div className={classNames(styles.rightColumn, 'isDesktop')}>
                <div className={styles.box}>
                    <TopAndFlop/>
                </div>
            </div>
        </div>
    );
};

export default DashboardForm;
