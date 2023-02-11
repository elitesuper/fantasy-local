import React from "react";
import RecoverPasswordForm from "../components/User/RecoverPasswordForm";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

const RecoverPassword = () => {
    return (
        <Layout>
            <Header position='center'/>
            <RecoverPasswordForm/>
        </Layout>
    );
};

export default RecoverPassword;
