import React, {useState} from "react";
import Select, {IndicatorSeparatorProps} from "react-select";

import { User } from "../../images/User";
import {Cake} from "../../images/Cake";
import {Mail} from "../../images/Mail";
import {Phone} from "../../images/Phone";
import styles from "./user.module"
import countries from "./Countries";


const Profile = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [DOB, setDOB] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");

    return (
        <div>
            <form className={styles.loginForm}>
                <div className={styles.fields}>
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
                    {/*<Select*/}
                    {/*    defaultValue={selectedOption}*/}
                    {/*    onChange={setSelectedOption}*/}
                    {/*    components={{IndicatorSeparator}}*/}
                    {/*    options={reactCountries}*/}
                    {/*    styles={customStyles}*/}
                    {/*/>*/}
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
                </div>
            </form>
        </div>
    );
};

export default Profile;
