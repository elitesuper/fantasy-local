import React, {useEffect} from "react";
import Header from "../components/Header/Header";
import ChallengesForm from "../components/User/DashboardForm";
import Layout from "../components/Layout/Layout";
import { useAppDispatch } from "../redux/hooks/hooks";
import { getPlayers } from "../redux/slices/players/playersActionCreation";

interface HeaderProps {
    page?: string;
}
export default function Dashboard(props: HeaderProps) {
    const dispatch = useAppDispatch();
    const positions = ['Wicketkeeper', 'Bowler', 'Batsman', 'All rounder'];
    const fetchData = () => {
        positions.forEach((position) => {
            dispatch(getPlayers({pageSize: 4, pageIndex: 0, position: position}));
        })
    }
    useEffect(() => {
        fetchData()
    }, []);
    return (
        <Layout>
            <Header page={props.page} hasMenu />
            <ChallengesForm page={props.page}/>
        </Layout>
    );
};
