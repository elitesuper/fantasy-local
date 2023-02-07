import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import styles from "./user.module";
import Select from "react-select";

const Signup = () => {
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setTel("");
        setPassword("");
        setConfirmPassword("");
    };

    const [selectedOption, setSelectedOption] = useState(null);
    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'},
    ];

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Sign Up</h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.fields}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        styles={{
                            control: (baseStyles, state) => ({
                                ...baseStyles,
                                placeholder: 'asdf',
                            }),
                        }}
                    />
                    <input
                        type='tel'
                        id='tel'
                        name='tel'
                        value={tel}
                        placeholder='Phone number'
                        required
                        onChange={(e) => setTel(e.target.value)}
                    />
                    <input
                        type='password'
                        name='password'
                        id='password'
                        minLength={8}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type='password'
                        name='confirmPassword'
                        id='confirmPassword'
                        minLength={8}
                        required
                        placeholder='Confirm Password'
                        value={password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <NavLink to="/phoneVerify" className={styles.loginBtn}>Sign Up</NavLink>
                <div className={styles.signup}>
                    Already have an account?{" "}
                    <NavLink to="/login" className={styles.link}>Login</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Signup;
