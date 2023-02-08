import React from "react";
import Header from "../components/Header/Header";
import DashboardForm from "../components/User/DashboardForm";
import Layout from "../components/Layout/Layout";

export default function Dashboard() {
    return (
        <Layout>
            <Header hasMenu />
            <DashboardForm/>
        </Layout>
    );
};
