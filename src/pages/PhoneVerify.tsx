import React from "react";
import PhoneVerifyForm from "../components/User/PhoneVerifyForm";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";

const PhoneVerify = () => {
    return (
        <Layout>
            <Header/>
            <PhoneVerifyForm/>
        </Layout>
    );
};

export default PhoneVerify;
