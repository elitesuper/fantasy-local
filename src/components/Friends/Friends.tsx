import React, {useEffect, useState} from "react";

import styles from './friends.module';
import {Magnifier} from "../../images/Magnifier";
import {FriendsService} from "../../services/friends.service";
import {AuthService} from "../../services/auth.service";

const Friends = () => {
    const [friends, setFriends] = useState([]);
    const [filteredFriends, setFilteredFriends] = useState([]);
    const fetchData = async () => {
        FriendsService.shared.getFriends({userId: '4d45eed9-9c16-4ac7-9c7b-8efa8c815c3b', searchKey: ''}).then(
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
                        onChange={filterFriends}
                    />
                </div>
            </div>
            {!filteredFriends?.length ? <div className={styles.noFriend}>There's no friends</div> : ''}
            {filteredFriends.map((friend:any) =>
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
