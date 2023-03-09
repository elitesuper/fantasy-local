import React, { useEffect, useState } from "react";
import {NavLink, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';

import styles from "./user.module"
import classNames from "classnames";
import VerificationInput from "react-verification-input";
import { AuthService } from "../../services/auth.service";

const RecoverPasswordForm = () => {
    const [code, setCode] = useState('');
    const [receivedCode, setReceivedCode] = useState('');
    const navigate = useNavigate();
    const phoneInfo = AuthService.shared.getRecoveryPhoneNumber();

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(code === receivedCode){
            AuthService.shared.sendNewPassword({mobileNumber:phoneInfo.mobileNumber, newPassword:"123456"}).then(
                response => {
                    const changed = response?.data?.data?.isChangePassword ?? false
                    if(changed){
                        navigate('/createPassword');
                    }else{
                        toast.error(`The password can't change.`);
                    }
                },
                error => {
                    toast.error(`Something went Wrong.`);
                }
            )
        }
        else{
            toast.error(`Verify Code doesn't match.`);
        }
    };

    useEffect(()=>{
        AuthService.shared.recoveryPassword({mobileNumber:phoneInfo.mobileNumber}).then(
            response => {
                if(response?.data?.data?.code){
    
                    setReceivedCode(response?.data?.data?.code)
                }
            },
            error => {
    
            }
        )
    },[])

    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.title}><strong>Recover password</strong></h2>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <div className={styles.introLight}>
                    The recover code was sent to you.<br/>Enter the new code here:
                </div>
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
                    onChange={(e)=>{
                        setCode(e);
                    }}
                />
                <button disabled={false} className={classNames("button large", styles.loginBtn)}>Continue</button>
                <div className={styles.signup}>
                    Didn't get the code?{" "}
                    <NavLink to="/" className={styles.link}>
                        Resend code
                    </NavLink>
                </div>
            </form>
        </div>
    );
};

export default RecoverPasswordForm;
