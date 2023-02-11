import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Select, {IndicatorSeparatorProps} from "react-select";

import countries from "./Countries";
import {Phone} from "../../images/Phone";
import {Lock} from "../../images/Lock";
import styles from "./user.module";
import classNames from "classnames";

const RegisterForm = () => {
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
                <div className={styles.introLight}>Let’s go through a few simple steps</div>
                <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    components={{IndicatorSeparator}}
                    options={reactCountries}
                    styles={customStyles}
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
                        value={password}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <button disabled={true} className={classNames("button large", styles.loginBtn)}>Log In</button>
                <NavLink className={styles.link} to="/forgotPassword">Forgot password?</NavLink>
                <div className={styles.signup}>
                    Don't have an account?{" "}
                    <NavLink to="/register" className={styles.link}>
                        Sign up
                    </NavLink>
                </div>
            </form>
            <div className={styles.terms}>If your proceed you automatically accept our terms of use</div>
        </div>
    );
};

export default RegisterForm;
