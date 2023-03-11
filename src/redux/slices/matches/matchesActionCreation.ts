import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authHeader } from "../../../services/auth-header";

const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;

export const getMatchesDataNoPlayers = createAsyncThunk('GetMatchesDataNoPlayers', async () => {
    const headers = await authHeader();
    const response = await axios.post(baseUrl + '/api/matches-data-no-players', {}, { headers: headers });
    return response.data?.data??{earlyDateTime: '', topMatches: [], leagues: []};
});