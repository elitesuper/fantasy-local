import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

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
        <div className={styles.verify}>
            <h2 style={{marginBottom: "30px"}}>Verify your Phone number</h2>
            <form className={styles.verifyForm} onSubmit={handleSubmit}>
                <label htmlFor='code' style={{marginBottom: "10px"}}>
                    A code has been sent your phone
                </label>
                <input
                    type='text'
                    name='code'
                    id='code'
                    className={styles.code}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button className={styles.codeBtn}>AUTHENTICATE</button>
            </form>
        </div>
    );
};

export default PhoneVerifyForm;
