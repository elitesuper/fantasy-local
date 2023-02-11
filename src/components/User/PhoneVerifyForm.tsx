import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import VerificationInput from "react-verification-input";

import styles from "./user.module";
import classNames from "classnames";

const PhoneVerifyForm = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({code});
        setCode("");
        navigate("/dashboard");
    };
    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}><strong>Verify Code</strong></h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.introLight}>Please enter the code we've sent you via SMS to continue</div>
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
                <button disabled={true} className={classNames("button large", styles.loginBtn)}>Authenticate</button>
            </form>
        </div>
    );
};

export default PhoneVerifyForm;
