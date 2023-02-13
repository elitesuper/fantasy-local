import React from "react";

import styles from './friends.module';
import {Magnifier} from "../../images/Magnifier";

const Friends = () => {
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
            <div className={styles.item}>
                <div className={styles.avatar}>
                    <img src="/images/user.png" alt=""/>
                </div>
                <div className={styles.user}>
                    <div className={styles.name}>Maja Svensk</div>
                    <div>+45 28 55 88 74</div>
                </div>
            </div>
        </>
    );
};

export default Friends;
