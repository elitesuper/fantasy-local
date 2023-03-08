import React, {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import VerificationInput from "react-verification-input";
import { toast } from 'react-toastify';

import styles from "./user.module";
import classNames from "classnames";
import { AuthService } from "../../services/auth.service";

const PhoneVerifyForm = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e:any) => {
        e.preventDefault();
        const registerInfo = AuthService.shared.getRegisterInfo();
        if(registerInfo?.mobileNumber){
            // AuthService.shared.phoneVerify({mobileNumber:registerInfo?.mobileNumber, verificationCode: code}).then(
            //     response => {
            //         console.log(response?.data)
            //         if(response?.data?.message){
            //             toast(response?.data?.message);
            //         }
            //         navigate('/')
            //     },
            //     error => {
            //         console.log(error);
            //         if(error?.response?.data?.title){
            //             toast.error(error?.response?.data?.title)
            //         }
            //     }
            // )
            if (code == registerInfo?.code){
                toast.success("Successfully Registered!");
                navigate('/')
                return;
            }
            toast.error('Verify Code is incorrect!');
        }else{
            toast.error("Register Info is not correct! \n Please register again.");
        }
    };
    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}><strong>Verify Code</strong></h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.introLight}>Please enter the code we've sent you via SMS to continue</div>
                <VerificationInput
                    length={5}
                    placeholder=''
                    validChars= '0-9'
                    classNames={{
                        container: styles.verContainer,
                        character: styles.verChar,
                        characterInactive: styles.verCharInactive,
                        characterSelected: styles.verCharActive,
                    }}
                    onChange= {(e:any) => {
                        setCode(e);
                    }}
                />
                <button disabled={false} className={classNames("button large", styles.loginBtn)}>Authenticate</button>
            </form>
        </div>
    );
};

export default PhoneVerifyForm;
