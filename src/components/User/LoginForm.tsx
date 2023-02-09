import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Select, { IndicatorSeparatorProps } from 'react-select';

import styles from "./user.module"
import countries from "./countries";

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

    const [selectedOption, setSelectedOption] = useState(null);
    const reactCountries = countries.map(
        ({
             name,
             dial_code,
             code,
             png
         }) => (
            {
                value: name,
                label:
                    <div className={styles.country}>
                        <div className={styles.country}>
                            <img className={styles.logo} src={png}/>
                            {name}
                        </div>
                        <span>{dial_code}</span>
                    </div>
            }
        )
    )

    const customStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            margin: "0px"
            // background: "#023950",
            // Overwrittes the different states of border
            // borderColor: state.isFocused ? "yellow" : "green",
            // Removes weird border around container
            // boxShadow: state.isFocused ? null : null,
            // "&:hover": {
            // Overwrittes the different states of border
            // borderColor: state.isFocused ? "red" : "blue"
            // }
        })
    };

    const IndicatorSeparator = ({innerProps}: IndicatorSeparatorProps<false>) => {
        return <span {...innerProps} />;
    };

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}>Welcome to<br/><strong>FantasyWay</strong></h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.intro}>
                    <img src="" alt="Login Details"/>
                    Enter your login details
                </div>
                <div className={styles.fields}>
                    <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        components={{IndicatorSeparator}}
                        options={reactCountries}
                        styles={customStyles}
                    />
                    <input
                        type='tel'
                        id='tel'
                        name='tel'
                        value={tel}
                        required
                        placeholder='Phone number'
                        onChange={(e) => setTel(e.target.value)}
                    />
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
                <button className={styles.loginBtn}>Log In</button>
                <NavLink className={styles.link} to="/forgotPassword">Forgot password?</NavLink>
                <div className={styles.signup}>
                    Don't have an account?{" "}
                    <NavLink to="/register" className={styles.link}>
                        Sign up
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
