import React, {useState} from "react";
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
import getDeviceRegistration from "../../lib/getDeviceRegistration";
import { useAuth } from "../../contexts/AuthContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { toast } from 'react-toastify';

const LoginForm = () => {
    const auth = useAuth();
    const [countryCode, setCountryCode] = useState(null);
    const [password, setPassword] = useState("");
    const [tel, setTel] = useState("");
    const [userphone, setUserPhone] = useLocalStorage('recoverinfo', null);
    const navigate = useNavigate();


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setPassword(password || "");
        setTel(tel || "");
        setCountryCode(countryCode || null);
        if (tel && password && countryCode ) {
            const dialCode = countries.find(country => country.name === countryCode?.value)?.dial_code;
            const mobileNumber = dialCode + tel;
            AuthService.shared.logIn({mobileNumber: mobileNumber, password: password, deviceToken: getDeviceId(), deviceRegistration:getDeviceRegistration()}).then(
                response => {
                    const userData = response?.data
                    if (response?.data?.data) {
                        if(!userData?.data?.userInfo){
                            toast.error(userData?.message);
                            return;
                        }else{
                            // AuthService.shared.setUser(response.data.data);
                            toast.success("Successfully logged In");
                            auth.login(response.data.data);
                        }
                    }
                },
                error => {
                    toast.error("Something went wrong!");
                }
            );
        }
    };

    const recoverPassword = () =>{
        if(tel && countryCode){
            const dialCode = countries.find(country => country.name === countryCode?.value)?.dial_code;
            const mobileNumber = dialCode + tel;
            AuthService.shared.recoveryPassword({mobileNumber:mobileNumber}).then(
                response => {
                    if(response?.data?.data?.code) {
                        setUserPhone(response?.data?.data);
                        navigate("/recoverPassword");
                    }else{
                        toast.error(response?.data?.message);
                    }
                },
                error => {
                    toast.error("Something went wrong!");
                }
            )
        }
        else{
            toast.error("Please enter phone number and select country code!");
            return;
        }
        
    }

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
                <div
                    className={styles.link}
                    onClick={() => recoverPassword()}
                >Forgot password?</div>
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
