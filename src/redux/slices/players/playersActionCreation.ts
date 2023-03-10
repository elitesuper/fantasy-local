import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authHeader } from "../../../services/auth-header";

const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;

export interface GetPlayerType {
    pageSize: Number;
    pageIndex: Number;
    position: String;
}

export const getPlayers = createAsyncThunk('GetPlayers', async (getPlayersData: GetPlayerType) => {
    const headers = await authHeader();
    const response = await axios.post(baseUrl + '/api/top-and-flop', getPlayersData, { headers: headers });
    return response.data?.data?.players??[];
});

export const get10Players = createAsyncThunk('Get10Players', async (getPlayersData: GetPlayerType) => {
    const headers = await authHeader();
    const response = await axios.post(baseUrl + '/api/top-and-flop', getPlayersData, { headers: headers });
    return response.data?.data?.players??[];
});