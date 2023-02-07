import React from "react";
import RegisterForm from "../components/User/RegisterForm";
import Layout from "../components/Layout/Layout";
import Header from "../components/Header/Header";

const Register = () => {
    return (
        <Layout>
            <Header/>
            <RegisterForm/>
        </Layout>
    );
};

export default Register;
