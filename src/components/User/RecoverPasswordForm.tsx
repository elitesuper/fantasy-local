import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./user.module"
import classNames from "classnames";
import VerificationInput from "react-verification-input";

const RecoverPasswordForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}><strong>Recover password</strong></h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.introLight}>
                    The recover code was sent to you.<br/>Enter the new code here:
                </div>
                <VerificationInput
                    length={5}
                    placeholder=''
                    validChars= '0-9'
                    classNames={{
                        container: styles.verContainer,
                        character: styles.verChar,
                        characterInactive: styles.verCharInactive,
                        characterSelected: styles.verCharActive,
                    }}
                />
                <button disabled={true} className={classNames("button large", styles.loginBtn)}>Continue</button>
                <div className={styles.signup}>
                    Didn't get the code?{" "}
                    <NavLink to="/" className={styles.link}>
                        Resend code
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default RecoverPasswordForm;
