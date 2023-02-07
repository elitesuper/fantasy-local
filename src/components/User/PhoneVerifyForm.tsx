import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import VerificationInput from "react-verification-input";

import styles from "./user.module";

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
            <h2 className={styles.title}>Verify Code</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.fields}>
                    <div>Please enter the code we've sent you via SMS to continue</div>
                    <VerificationInput
                        length={5}
                        placeholder=''
                        classNames={{
                            container: styles.verContainer,
                            character: styles.verChar,
                            characterInactive: styles.verCharInactive,
                            characterSelected: styles.verCharActive,
                        }}
                    />
                    <button className={styles.loginBtn}>AUTHENTICATE</button>
                </div>
            </form>
        </div>
    );
};

export default PhoneVerifyForm;
