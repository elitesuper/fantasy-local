import React, {useState} from "react";
import Select, {IndicatorSeparatorProps} from "react-select";

import { User } from "../../images/User";
import {Cake} from "../../images/Cake";
import {Mail} from "../../images/Mail";
import {Phone} from "../../images/Phone";
import styles from "./user.module"
import countries from "./Countries";
import classNames from "classnames";
import { AuthService } from "../../services/auth.service";
import { ProfileService } from "../../services/profile.service";
import getDeviceId from "../../lib/getDeviceId";
import { useAuth } from "../../contexts/AuthContext";
import getDate from "../../lib/getDate";
import { toast } from "react-toastify";


const Profile = () => {

    const {user, update} = useAuth();
    const [firstName, setFirstName] = useState<string>(user?.firstName??"");
    const [lastName, setLastName] = useState<string>(user?.lastName??"");
    const [DOB, setDOB] = useState(getDate(user?.dateOfBirth));
    const [email, setEmail] = useState<string>(user?.email??"");
    const [tel, setTel] = useState<string>(user?.mobileNumber);
    const [selectedCountry, setSelectedCountry] = useState(null);


    const handleSubmit = (e : any) => {
        e.preventDefault();
        const dialCode = countries.find(country => country.name === selectedCountry?.value);
        ProfileService.shared.updateProfile({
            userId: user?.userID??"",
            mobileNumber: tel,
            firstName: firstName,
            lastName: lastName,
            email:email,
            country:dialCode?.name??"",
            countryCode: dialCode?.dial_code??"",
            dob: DOB.toString(),
            preferredSportId: 0,
            sportId: 0,
            city:user?.city??"",
            registrationToken: getDeviceId(),
        }).then(
            response=>{
                const data = response?.data?.data?.userInfo;
                if(data){
                    update(data);
                    toast.success("Successfully updated!");
                }
            },
            error=>{
                toast.error("Something went wrong!");
            }
        )
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
                    defaultValue={selectedCountry}
                    onChange={setSelectedCountry}
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
