import React, {useEffect, useState} from "react";

import {Magnifier} from "../../images/Magnifier";
import {FriendsService} from "../../services/friends.service";
import styles from './friends.module';
import {AuthService} from "../../services/auth.service";
import {useNavigate} from "react-router-dom";

const InviteFriends = () => {
    const navigate = useNavigate();
    const [friends, setFriends] = useState([]);
    const [filteredFriends, setFilteredFriends] = useState([]);
    const fetchData = async () => {
        const user = AuthService.shared.getUser();
        const userId = user?.userId || user?.userID;
        FriendsService.shared.getFriends({userId: userId, searchKey: ''}).then(
            response => {
                setFriends(response.data.data??[]);
                setFilteredFriends(response.data.data??[]);
            },
            error => {
                console.log(error)
            }
        );
    }
    const filterFriends = (e: string) => {
        setFilteredFriends(friends.filter((friend) => { return (friend?.firstName + '' + friend?.lastName).toLowerCase().indexOf(e.target.value) > -1}));
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className={styles.search}>
                <div className={styles.text}>
                    <span className={styles.name}>Invite Friends</span>
                    <a href="#" className={styles.backButton} onClick={() => navigate(-1)}>Back</a>
                </div>
                <div className={styles.field}>
                    <button><Magnifier /></button>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Search'
                        onChange={filterFriends}
                    />
                </div>
            </div>
            {!filteredFriends?.length ? <div className={styles.noFriend}>There's no friends</div> : ''}
            {filteredFriends.map((friend:any) =>
                <div className={styles.item}>
                    <div className={styles.user}>
                        <div className={styles.name}>{friend.firstName + ' ' + friend.lastName}</div>
                        <div>{friend.mobileNumber}</div>
                    </div>
                    <div className={styles.avatar}>
                        <button className="button">Send</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default InviteFriends;
