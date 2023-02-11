import React from "react";
import CreatePasswordForm from "../components/User/CreatePasswordForm";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";

const CreatePassword = () => {
    return (
        <Layout>
            <Header position='center'/>
            <CreatePasswordForm/>
        </Layout>
    );
};

export default CreatePassword;
