import {authHeader, headers} from "./auth-header";
import axios from "axios";

const baseUrl  = process.env.PROXY ?? process.env.COMMON_BASE_URL;

export class TopandFlopService {
    
    static readonly shared: TopandFlopService = new TopandFlopService();


    async dataFetch(filter: { pageSize: Number; pageIndex: Number; position: String }) {
        const headers = await authHeader();
        return axios.post(baseUrl + '/api/top-and-flop', filter, { headers: headers });
    }
}