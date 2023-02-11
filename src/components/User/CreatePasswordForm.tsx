import React, {useState} from "react";

import {Lock} from "../../images/Lock";
import styles from "./user.module"
import classNames from "classnames";

const CreatePasswordForm = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setPassword("");
        setConfirmPassword("");
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Create a<br/><strong>new password</strong></h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.introLight}>
                    Your new password must be different from previous used password.
                </div>
                <div className="inputIcons">
                    <i><Lock /></i>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        minLength={8}
                        required
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputIcons">
                    <i><Lock /></i>
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        minLength={8}
                        required
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button disabled={true} className={classNames("button large", styles.loginBtn)}>Save new password</button>
            </form>
        </div>
    );
};

export default CreatePasswordForm;
