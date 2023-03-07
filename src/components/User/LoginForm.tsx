import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import Select, { IndicatorSeparatorProps } from 'react-select';
import { useNavigate } from "react-router-dom";
import countries from "./Countries";
import {Arrow} from "../../images/Arrow";
import {Lock} from "../../images/Lock";
import {Phone} from "../../images/Phone";
import styles from "./user.module"
import classNames from "classnames";
import {AuthService} from "../../services/auth.service";
import getDeviceId from "../../lib/getDeviceId";

const LoginForm = () => {
    const navigate = useNavigate();
    const [countryCode, setCountryCode] = useState(null);
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPassword(password || "");
        setTel(tel || "");
        setCountryCode(countryCode || null);
        if (tel && password && countryCode ) {
            const dialCode = countries.find(country => country.name === countryCode?.value)?.dial_code;
            AuthService.shared.logIn({mobileNumber: tel, password: password, countryCode: dialCode, deviceToken: getDeviceId()}).then(
                response => {
                    console.log(response);
                    if (response?.data?.data) {
                        AuthService.shared.setUser(response.data.data);
                        navigate("/dashboard");
                    }
                },
                error => {
                    console.log(error);
                }
            );
        }
    };

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
            marginBottom: "10px",
            height: "60px",
            borderRadius: "10px"
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
                    <Arrow />
                    Enter your login details
                </div>
                <Select
                    defaultValue={countryCode}
                    onChange={setCountryCode}
                    components={{IndicatorSeparator}}
                    options={reactCountries}
                    styles={customStyles}
                    id={countryCode}
                />
                <div className="inputIcons">
                    <i><Phone /></i>
                    <input
                        type='tel'
                        id='tel'
                        name='tel'
                        value={tel}
                        required
                        placeholder='Phone number'
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>
                <div className="inputIcons">
                    <i><Lock /></i>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        minLength={4}
                        required
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    disabled={!password || !tel || !countryCode}
                    className={classNames("button large", styles.loginBtn)}>
                    Log In
                </button>
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
