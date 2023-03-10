import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Select, {IndicatorSeparatorProps} from "react-select";
import { toast } from 'react-toastify';

import countries from "./Countries";
import {Phone} from "../../images/Phone";
import {Lock} from "../../images/Lock";
import styles from "./user.module";
import classNames from "classnames";
import {AuthService} from "../../services/auth.service";
import getDeviceId from "../../lib/getDeviceId";
import getDeviceRegistration from "../../lib/getDeviceRegistration";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const RegisterForm = () => {
    const [register, setRegister] = useLocalStorage("register", null);
    const navigate = useNavigate();
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [countryCode, setCountryCode] = useState(null);

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setTel(tel || "");
        setPassword(password || "");
        setConfirmPassword(confirmPassword || "");
        setCountryCode(countryCode || null);
        if (tel && password && countryCode && confirmPassword === password ) {
            const dialCode: string | undefined = countries.find(country => country.name === countryCode?.value)?.dial_code;
            const mobileNumber = dialCode + tel;
            AuthService.shared.signUp({mobileNumber: mobileNumber, password: password, deviceToken: getDeviceId(), deviceRegistration:getDeviceRegistration()}).then(
                response => {
                    if (response?.data?.data) {
                        if(response?.data?.data.userId){
                            setRegister(response?.data?.data)
                            navigate("/phoneVerify");
                        }
                        else{
                            toast.error(response?.data?.message);
                        }
                    } else {
                        console.log(response.data);
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
            <h2 className={styles.title}>Create a<br/><strong>FantasyWay account</strong></h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.introLight}>Let???s go through a few simple steps</div>
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
                <button
                    disabled={!countryCode || !password || !confirmPassword || !tel || confirmPassword !== password}
                    className={classNames("button large", styles.loginBtn)}>
                    Sign up
                </button>
                <div className={styles.signup}>
                    Do you have an account?{" "}
                    <NavLink to="/login" className={styles.link}>
                        Log in
                    </NavLink>
                </div>
            </form>
            <div className={styles.terms}>If your proceed you automatically accept our terms of use</div>
        </div>
    );
};

export default RegisterForm;
