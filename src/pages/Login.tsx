import React from "react";
import LoginForm from "../components/User/LoginForm";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

const Login = () => {
    return (
        <Layout>
            <Header/>
            <LoginForm/>
        </Layout>
    );
};

export default Login;
