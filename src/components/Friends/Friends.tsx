import React, {useEffect, useState} from "react";

import styles from './friends.module';
import {Magnifier} from "../../images/Magnifier";
import {FriendsService} from "../../services/friends.service";
import {AuthService} from "../../services/auth.service";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const fetchData = async () => {
        FriendsService.shared.getFriends({userId: AuthService.shared.getUser()?.userInfo?.userID, searchKey: ''}).then(
            response => {
                setFriends(response.data.data??[]);
            },
            error => {
                console.log(error)
            }
        );
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className={styles.search}>
                <div className={styles.text}>
                    <span className={styles.name}>Friends</span>
                    <a href="#">Invite friends</a>
                </div>
                <div className={styles.field}>
                    <button><Magnifier /></button>
                    <input
                        type='text'
                        name='search'
                        id='search'
                        placeholder='Search'
                    />
                </div>
            </div>
            {!friends?.length ? <div className={styles.noFriend}>There's no friends</div> : ''}
            {friends.map((friend:any) =>
            <div className={styles.item}>
                <div className={styles.avatar}>
                    <img src={process.env.COMMON_BASE_URL + friend.picture} alt=""/>
                </div>
                <div className={styles.user}>
                    <div className={styles.name}>{friend.firstName + ' ' + friend.lastName}</div>
                    <div>{friend.mobileNumber}</div>
                </div>
            </div>
            )}
        </>
    );
};

export default Friends;
