import React, {useState} from "react";
import Select, {IndicatorSeparatorProps} from "react-select";

import { User } from "../../images/User";
import {Cake} from "../../images/Cake";
import {Mail} from "../../images/Mail";
import {Phone} from "../../images/Phone";
import styles from "./user.module"
import countries from "./Countries";
import classNames from "classnames";


const Profile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
            marginBottom: "10px",
            height: "60px",
            borderRadius: "10px"
        })
    };

    const IndicatorSeparator = ({innerProps}: IndicatorSeparatorProps<false>) => {
        return <span {...innerProps} />;
    };

    return (
        <div>
            <form className={styles.column} onSubmit={handleSubmit}>
                <div className="inputIcons">
                    <i><User /></i>
                    <input
                        type='text'
                        id='firstName'
                        name='firstName'
                        value={firstName}
                        required
                        placeholder='First Name'
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="inputIcons">
                    <i><User /></i>
                    <input
                        type='text'
                        id='lastName'
                        name='lastName'
                        value={lastName}
                        required
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="inputIcons">
                    <i><Cake /></i>
                    <input
                        type='date'
                        id='DOB'
                        name='DOB'
                        value={DOB}
                        required
                        onChange={(e) => setDOB(e.target.value)}
                    />
                </div>
                <div className="inputIcons">
                    <i><Mail /></i>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        required
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
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
                        placeholder='Telephone'
                        onChange={(e) => setTel(e.target.value)}
                    />
                </div>
                <button className={classNames("button large", styles.loginBtn)}>Save</button>
            </form>
        </div>
    );
};

export default Profile;
