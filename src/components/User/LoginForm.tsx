import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";

import styles from "./user.module"

const LoginForm = () => {
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({tel, password});
        setPassword("");
        setTel("");
    };

    const gotoSignUpPage = () => navigate("/register");

    return (
        <div className={styles.loginContainer}>
            <h2>Login </h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor='tel'>Email</label>
                <input
                    type='tel'
                    id='tel'
                    name='tel'
                    value={tel}
                    required
                    onChange={(e) => setTel(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    minLength={8}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.loginBtn}>SIGN IN</button>
                <p>
                    Don't have an account?{" "}
                    <span className={styles.link} onClick={gotoSignUpPage}>
                        Sign up
                    </span>
                </p>
                <NavLink to="/forgotPassword">Forgot Password?</NavLink>
            </form>
        </div>
    );
};

export default LoginForm;
