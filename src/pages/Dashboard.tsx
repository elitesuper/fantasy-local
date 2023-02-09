import React from "react";
import Header from "../components/Header/Header";
import DashboardForm from "../components/User/DashboardForm";
import Layout from "../components/Layout/Layout";

interface HeaderProps {
    page?: string;
}
export default function Dashboard(props: HeaderProps) {
    return (
        <Layout>
            <Header pageData={props.page} hasMenu />
            <DashboardForm pageData={props.page}/>
        </Layout>
    );
};
