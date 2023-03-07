import {authHeader, headers} from "./auth-header";
import axios from "axios";


export class TopandFlopService {
    
    static readonly shared: TopandFlopService = new TopandFlopService();


    async dataFetch(filter: { pageSize: Number; pageIndex: Number; position: String }) {
        const headers = await authHeader();
        return axios.post('/common-api/api/top-and-flop', filter, { headers: headers });
    }
}