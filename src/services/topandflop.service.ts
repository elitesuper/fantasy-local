import getAxiosInstance from "../lib/getAxiosInstance";
import {authHeader, headers} from "./auth-header";

const axios = getAxiosInstance(process.env.COMMON_BASE_URL ?? '');


export class TopandFlopService {
    
    static readonly shared: TopandFlopService = new TopandFlopService();


    async dataFetch(filter: { pageSize: Number; pageIndex: Number; position: String }) {
        const headers = await authHeader();
        return axios.post('/api/top-and-flop', filter, { headers: headers });
    }
}