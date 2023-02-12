import React from "react";

import styles from './chat.module';
import classNames from "classnames";
import {Send} from "../../images/Send";

const Chat = () => {
    return (
        <>
            <div className="box">
                <div className="boxTitle">Chat</div>
                <div className="boxContent">
                    <strong>IND vs AUT Chat</strong>
                </div>
            </div>
            <div className={styles.chat}>
                <div className={styles.message}>
                    <div className={styles.avatar}>
                        <img src="/images/user.png" alt=""/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name}>
                            <strong>You</strong>
                            4:23 pm
                        </div>
                        <div className={styles.bubble}>
                            Lorem ipsum dolor sit amet, ctetur adipiscingt, sed do eiusmod tempor.
                        </div>
                    </div>
                </div>
                <div className={classNames(styles.message, styles.messageAway)}>
                    <div className={styles.text}>
                        <div className={styles.name}>
                            4:23 pm
                            <strong>Morten Nielsen</strong>
                        </div>
                        <div className={styles.bubble}>
                            Lorem ipsum dolor  amet, consetur adipiscing elit, sed do eiusmod.
                        </div>
                    </div>
                    <div className={styles.avatar}>
                        <img src="/images/user.png" alt=""/>
                    </div>
                </div>
                <div className={classNames(styles.message, styles.messageAway)}>
                    <div className={styles.text}>
                        <div className={styles.name}>
                            4:23 pm
                            <strong>Morten Nielsen</strong>
                        </div>
                        <div className={styles.bubble}>
                            Lorem ipsum dolor  amet, consetur adipiscing elit, sed do eiusmod.
                        </div>
                    </div>
                    <div className={styles.avatar}>
                        <img src="/images/user.png" alt=""/>
                    </div>
                </div>
                <div className={styles.message}>
                    <div className={styles.avatar}>
                        <img src="/images/user.png" alt=""/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name}>
                            <strong>You</strong>
                            4:23 pm
                        </div>
                        <div className={styles.bubble}>
                            Lorem ipsum dolor sit amet, ctetur adipiscingt, sed do eiusmod tempor.
                        </div>
                    </div>
                </div>
                <div className={styles.message}>
                    <div className={styles.avatar}>
                        <img src="/images/user.png" alt=""/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name}>
                            <strong>You</strong>
                            4:23 pm
                        </div>
                        <div className={styles.bubble}>
                            Lorem ipsum dolor sit amet, ctetur adipiscingt, sed do eiusmod tempor.
                        </div>
                    </div>
                </div>
                <div className={styles.message}>
                    <div className={styles.avatar}>
                        <img src="/images/user.png" alt=""/>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.name}>
                            <strong>You</strong>
                            4:23 pm
                        </div>
                        <div className={styles.bubble}>
                            Lorem ipsum dolor sit amet, ctetur adipiscingt, sed do eiusmod tempor.
                        </div>
                    </div>
                </div>
                <div className={styles.newMessage}>
                    <div className={styles.searchWrapper}>
                        <input type="text" placeholder="Type..." />
                        <button type="submit"><Send/></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;
